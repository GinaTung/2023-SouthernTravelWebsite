import { attractionList, combineAttractionItem} from "./viewgetAttractions.js";
import { api_url } from "./config.js";
let attractionsData2 = [];
const attractionsNum3 = document.querySelector(".attractionsNum3");
const attractionsNum4 = document.querySelectorAll(".attractionsNum4");
const attractionsSelect2 = document.querySelector(".attractions-select");
function getAttractionData2() {
  axios
    .get(`${api_url}/attractionsList`)
    .then(function (response) {
      attractionsData2 = response.data;
      console.log(attractionsData2);
      displayTotalCount();
      displayAreaCounts();
    })
    .catch(function (error) {
      console.log(error);
      alert(`${error.response.status}錯誤`);
    });
}

getAttractionData2();
changeAttractions2();

// 顯示總筆數
function displayTotalCount() {
  attractionsNum3.textContent = attractionsData2.length;
}
function displayAreaCounts() {
    const areaCounts = {}; // 用來統計每個區域的筆數
  
    attractionsData2.forEach(function (item) {
      const area = item.area;
      if (!areaCounts[area]) {
        areaCounts[area] = 1;
      } else {
        areaCounts[area]++;
      }
    });
    // 顯示每個區域的筆數
    attractionsNum4.forEach((element) => {
        const areaName = element.parentElement.dataset.name;
      element.textContent = areaCounts[areaName] || 0;
    });
  }

  // function currentLink(){
  //   const currentLink =document.querySelector(".current-link");
  //   currentLink.addEventListener("click",function(e){
  //     e.preventDefault();
  //     currentLink.classList.add("active");
  //     currentLink.href = window.location.href;
  //   })
  // }
  // currentLink()
  //監聽篩選
 function changeAttractions2() {
  attractionsSelect2.addEventListener("click", function (e) {
    if (e.target.tagName.toLowerCase() === "a") {
      e.preventDefault();
      // 移除先前的 .navlink.active 樣式
      const activeNavLinks = document.querySelectorAll(".active");
      activeNavLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // 添加 .navlink.active 樣式到當前點擊的 a 元素
      e.target.classList.add("active");

    }
  });
}
function renderAttractions2() {
  let str = "";
  attractionsData2.forEach(function (item) {
    str += combineAttractionItem(item);
  });
  attractionList.innerHTML = str;
}

attractionsSelect2.addEventListener("click", function (e) {
  const selectArea = e.target.dataset.name;
  if (selectArea === "全部") {
    renderAttractions2();
    return;
  }
  let str = "";
  attractionsData2.forEach(function (item) {
    if (String(item.area) === String(selectArea)) {
      str += combineAttractionItem(item);
    }
  });
  attractionList.innerHTML = str;
});
