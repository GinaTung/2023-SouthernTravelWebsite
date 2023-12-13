import { api_url } from "./config.js";
const attractionPlansWrap = document.querySelector(".attraction-plans-wrap");
//attractionPlanList
let attractionPlansData = [];
getAttractionPlansList();
function getAttractionPlansList() {
  axios
    .get(`${api_url}/attractionPlansList`)
    .then(function (res) {
      attractionPlansData = res.data;
      console.log(attractionPlansData);
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
        <h4 class="fs-6 fs-lg-5 fw-bold text-primary-700 card-title-att">${planItem.title}</h4>
      </div>
      <div class="card-footer d-flex justify-content-between border-0 pt-0">
        <i class="bi bi-cart-fill me-1 fs-6 fs-lg-5"></i>
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
