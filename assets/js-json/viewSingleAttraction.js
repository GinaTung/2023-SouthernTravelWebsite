import { attractionList, combineAttractionItem, paginationArea} from "./viewgetAttractions.js";
import { api_url } from "./config.js";
let attractionsData2 = [];
const attractionsNum3 = document.querySelector(".attractionsNum");
const attractionsNum4 = document.querySelectorAll(".attractionsNum2");
const attractionsSelect2 = document.querySelector(".attractions-select");
function getAttractionData2() {
  axios
    .get(`${api_url}/attractionsList`)
    .then(function (response) {
      attractionsData2 = response.data;
      // console.log(attractionsData2);
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
function showLoader() {
  attractionList.innerHTML = `
    <div class="bg-primary-600 w-100 mt-3" style="text-align: center;margin: auto;padding: 20px;min-height: 150px;">
      <span class="loader"></span>
    </div>
  `;
}

function renderAttractions2() {
  let str = "";
  let str2="";
  attractionsData2.forEach(function (item) {
    str += combineAttractionItem(item);
  });
  str2 = paginationArea();
  attractionList.innerHTML = str+str2;
}

attractionsSelect2.addEventListener("click", function (e) {
  const selectArea = e.target.dataset.name;
  if (selectArea === "全部") {
    showLoader(); // 顯示 loader
    renderAttractions2();
  } else {
    let hasMatchingItem = false;
    let str = "";
    attractionsData2.forEach(function (item) {
      if (String(item.area) === String(selectArea)) {
        str += combineAttractionItem(item);
        hasMatchingItem = true; // 找到符合條件的項目
      }
    });
    if (!hasMatchingItem) {
      showLoader(); // 顯示 loader
    } else {
      let str2="";
      str2 = paginationArea();
      attractionList.innerHTML = str+str2;
    }
  }
});