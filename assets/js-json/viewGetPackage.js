import { api_url } from "./config.js";
const attractionPlansWrap = document.querySelector(".attraction-plans-wrap");
//attractionPlanList attraction-plans-select
const attractionPlansSelect =document.querySelector(".attraction-plans-select");
const attractionsNum5 = document.querySelector(".attractionsNum");
const attractionsNum6 = document.querySelectorAll(".attractionsNum2");
let attractionPlansData = [];
function init(){
  getAttractionPlansList();
}
init();
function getAttractionPlansList() {
  axios
    .get(`${api_url}/attractionPlansList`)
    .then(function (res) {
      attractionPlansData = res.data;
      console.log(attractionPlansData);
      displayTotalCount2();
      displayAreaCounts2();
      changeAttractions2();
      renderAttractionPlansWrap();
    })
    .catch(function (error) {
      console.log(error);
      alert(`${error.response.status}錯誤`);
    });
}

//組合列表
function combineAttractionPlanItem(planItem) {
  return ` 
    <div class="col-12 col-md-6 col-lg-4 ">
    <div class="card card-att h-100">
      <span class="tag text-white">${planItem.area}</span>
      <div class="card-att-img">
        <img src="${planItem.images}" class="card-img-top img-fluid " alt="${planItem.title}">
      </div>
      <div class="heart3">
        <i class="bi bi-heart heart-click"></i>
      </div>
      <div class="card-body card-body-att">
        <div class="card-title d-flex align-items-center">
          <i class="bi bi-geo-fill me-1 fs-6 fs-lg-5 text-primary-700"></i>
          <p class="fs-6 fs-lg-5 fw-bold text-primary-700 card-title-att">${planItem.area}</p>
        </div>
        <h4 class="fs-6 fs-lg-5 fw-bold text-primary-700 card-title-att">
        <a href="tourist-package-1.html?attractionId=${planItem.attractionPlanId}" class="">${planItem.title}</a>
        </h4>
      </div>
      <div class="card-footer d-flex justify-content-between border-0 pt-0">
        <i class="bi bi-cart-fill me-1 fs-6 fs-lg-5 z-index-3"></i>
        <span class="fs-6 fs-lg-5">${planItem.planPrice}</span>
      </div>
    </div>
  </div>`;
}
function paginationArea2() {
  return `
    <nav class="mt-10 d-flex justify-content-center">
                  <ul class="pagination mb-0">
                    <li class="page-item"><a class="page-link" href="#">上一頁</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">下一頁</a></li>
                  </ul>
                </nav> 
    `;
}

function renderAttractionPlansWrap() {
  let str = "";
  let str2 = "";
  attractionPlansData.forEach((planItem) => {
    str += combineAttractionPlanItem(planItem);
  });
  str2 = paginationArea2();
  attractionPlansWrap.innerHTML = str + str2;
}

attractionPlansWrap.addEventListener("click", function (e) {
  const heartIcon = e.target.closest(".bi-heart");
  const heartIconFill = e.target.closest(".bi-heart-fill");

  // 判断点击了哪种心形图标
  if (heartIcon) {
    handleHeartClick(heartIcon);
  } else if (heartIconFill) {
    handleHeartClick(heartIconFill);
  }
});


function handleHeartClick(heartIcon) {
// 获取对应景点数据的 ID
// const attractionId = heartIcon.getAttribute("data-heartId");
// // 获取当前心形图标的状态
// const heartStatus = heartIcon.classList.contains("heart-click");
// 处理心形点击
heartIcon.classList.toggle("heart-click");

// 使用 toggle 方法切换 "bi-heart" 和 "bi-heart-fill" 之间的类
heartIcon.classList.toggle("bi-heart");
heartIcon.classList.toggle("bi-heart-fill");
}

function displayTotalCount2() {
  attractionsNum5.textContent = attractionPlansData.length;
}
function displayAreaCounts2() {
    const areaCounts = {}; // 用來統計每個區域的筆數
  
    attractionPlansData.forEach(function (item) {
      const area = item.area;
      if (!areaCounts[area]) {
        areaCounts[area] = 1;
      } else {
        areaCounts[area]++;
      }
    });
    // 顯示每個區域的筆數
    attractionsNum6.forEach((element) => {
        const areaName = element.parentElement.dataset.name;
      element.textContent = areaCounts[areaName] || 0;
    });
  }

  //監聽篩選
export function changeAttractions2() {
  attractionPlansSelect.addEventListener("click", function (e) {
    if (e.target.tagName.toLowerCase() === "a") {
      e.preventDefault();
      // 移除先前的 .navlink.active 樣式
      const activeNavLinks = document.querySelectorAll(".active");
      activeNavLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // 添加 .navlink.active 樣式到當前點擊的 a 元素
      e.target.classList.add("active");
      const selectArea = e.target.dataset.name;
      if (selectArea === "全部") {
        renderAttractionPlansWrap();
        return;
      }
      let str = "";
      let hasMatchingItem = false; // 新增變數
      attractionPlansData.forEach(function (item) {
        if (String(item.area) === String(selectArea)) {
          str += combineAttractionPlanItem(item);
          hasMatchingItem = true; // 找到符合條件的項目
        }
      });
      if (!hasMatchingItem) {
        // 如果沒有符合條件的項目，顯示 loader 或其他內容
        attractionPlansWrap.innerHTML = `
        <div class="bg-primary-600 w-100 mt-3" style="text-align: center;margin: auto;padding: 20px;min-height: 150px;">
            <span class="loader"></span>
        </div>
        `;
      } else {
        // 如果有符合條件的項目，顯示相應的內容
        attractionPlansWrap.innerHTML = str;
      }
    }
  });
}