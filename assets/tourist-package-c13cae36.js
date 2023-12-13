import"./main-da1d103c.js";import{a as l}from"./config-3d28a90d.js";const e=document.querySelector(".attraction-plans-wrap");let t=[];c();function c(){axios.get(`${l}/attractionPlansList`).then(function(a){t=a.data,console.log(t),o()}).catch(function(a){console.log(a),alert(`${a.response.status}錯誤`)})}function r(a){return` 
    <div class="col-12 col-md-6 col-lg-4 ">
    <div class="card card-att h-100">
      <span class="tag text-white">${a.area}</span>
      <div class="card-att-img">
        <img src="${a.images}" class="card-img-top img-fluid " alt="${a.title}">
      </div>
      <div class="heart3">
        <i class="bi bi-heart heart-click"></i>
      </div>
      <div class="card-body card-body-att">
        <div class="card-title d-flex align-items-center">
          <i class="bi bi-geo-fill me-1 fs-6 fs-lg-5 text-primary-700"></i>
          <p class="fs-6 fs-lg-5 fw-bold text-primary-700 card-title-att">${a.area}</p>
        </div>
        <h4 class="fs-6 fs-lg-5 fw-bold text-primary-700 card-title-att">${a.title}</h4>
      </div>
      <div class="card-footer d-flex justify-content-between border-0 pt-0">
        <i class="bi bi-cart-fill me-1 fs-6 fs-lg-5"></i>
        <span class="fs-6 fs-lg-5">${a.planPrice}</span>
      </div>
    </div>
  </div>`}function n(){return`
    <nav class="mt-10 d-flex justify-content-center">
                  <ul class="pagination mb-0">
                    <li class="page-item"><a class="page-link" href="#">上一頁</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">下一頁</a></li>
                  </ul>
                </nav> 
    `}function o(){let a="",i="";t.forEach(s=>{a+=r(s)}),i=n(),e.innerHTML=a+i}
