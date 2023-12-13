import { api_url } from "./config.js";

export let attractionsData = [];
export const attractionList = document.querySelector(".attractionWrap");
//產品列表
export function getAttractionList(callbacks = {}) {
  axios
    .get(`${api_url}/attractionsList`)
    .then(function (response) {
      attractionsData = response.data;
      // console.log(response.data);
      renderAttractions();
      //以下為viewSelectArea.js
      if (callbacks.changeAttractions) {
        callbacks.changeAttractions();
      }

      if (callbacks.displayTotalCount) {
        callbacks.displayTotalCount();
      }

      if (callbacks.displayAreaCounts) {
        callbacks.displayAreaCounts();
      }
    })
    .catch(function (error) {
      console.log(error);
      alert(`${error.response.status}錯誤`);
    });
}

//組合列表
export function combineAttractionItem(item) {
  return ` 
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card card-att h-100">
      <span class="tag text-white">${item.area}</span>
      <div class="card-att-img">
        <img src=".${item.images}" class="card-img-top img-fluid " alt="${item.title}">
      </div>
      <div class="heart3">
        <i class="bi bi-heart heart-click" data-heartStatus="false" data-heartId="${item.attractionId}"></i>
      </div>
      <div style="transform: rotate(0);">
        <div class="card-body card-body-att">
          <div class="card-title  d-flex justify-content-between align-items-center card-title-att">
            <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att">${item.title}</h4>
          </div>
          <p class="card-text card-font-truncate">
          ${item.description}
          </p>
        </div>
        <div class="card-footer text-end border-0">
          <a href="tourist-chiayi-1.html?attractionId=${item.attractionId}" class="fs-5 stretched-link">more</a>
        </div>

      </div>
    </div>
  </div>`;
}
export function paginationArea(){
  return`
  <nav class="mt-10 d-flex justify-content-center">
                <ul class="pagination mb-0">
                  <li class="page-item"><a class="page-link" href="#">上一頁</a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">下一頁</a></li>
                </ul>
              </nav> 
  `
}
//渲染
export function renderAttractions() {
  let str = "";
  let str2="";
  attractionsData.forEach(function (item) {
    str += combineAttractionItem(item);
  });
  str2 = paginationArea();
  attractionList.innerHTML = str+str2;
}

attractionList.addEventListener("click", function (e) {
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

  // 在这里可以添加更新服务器或其他操作

  // console.log("点击了心形图标，景点ID为:", attractionId, "心形状态为:", heartStatus ? "已选中" : "未选中");
}