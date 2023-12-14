import"./main-da1d103c.js";import{a as d}from"./config-3d28a90d.js";const c=document.querySelector(".attraction-plans-wrap"),g=document.querySelector(".attraction-plans-select"),u=document.querySelector(".attractionsNum"),p=document.querySelectorAll(".attractionsNum2");let i=[];function m(){h()}m();function h(){axios.get(`${d}/attractionPlansList`).then(function(t){i=t.data,console.log(i),b(),y(),L(),f()}).catch(function(t){console.log(t),alert(`${t.response.status}錯誤`)})}function o(t){return` 
    <div class="col-12 col-md-6 col-lg-4 ">
    <div class="card card-att h-100">
      <span class="tag text-white">${t.area}</span>
      <div class="card-att-img">
        <img src="${t.images}" class="card-img-top img-fluid " alt="${t.title}">
      </div>
      <div class="heart3">
        <i class="bi bi-heart heart-click"></i>
      </div>
      <div class="card-body card-body-att">
        <div class="card-title d-flex align-items-center">
          <i class="bi bi-geo-fill me-1 fs-6 fs-lg-5 text-primary-700"></i>
          <p class="fs-6 fs-lg-5 fw-bold text-primary-700 card-title-att">${t.area}</p>
        </div>
        <h4 class="fs-6 fs-lg-5 fw-bold text-primary-700 card-title-att">${t.title}</h4>
      </div>
      <div class="card-footer d-flex justify-content-between border-0 pt-0">
        <i class="bi bi-cart-fill me-1 fs-6 fs-lg-5"></i>
        <span class="fs-6 fs-lg-5">${t.planPrice}</span>
      </div>
    </div>
  </div>`}function v(){return`
    <nav class="mt-10 d-flex justify-content-center">
                  <ul class="pagination mb-0">
                    <li class="page-item"><a class="page-link" href="#">上一頁</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">下一頁</a></li>
                  </ul>
                </nav> 
    `}function f(){let t="",e="";i.forEach(a=>{t+=o(a)}),e=v(),c.innerHTML=t+e}c.addEventListener("click",function(t){const e=t.target.closest(".bi-heart"),a=t.target.closest(".bi-heart-fill");e?r(e):a&&r(a)});function r(t){t.classList.toggle("heart-click"),t.classList.toggle("bi-heart"),t.classList.toggle("bi-heart-fill")}function b(){u.textContent=i.length}function y(){const t={};i.forEach(function(e){const a=e.area;t[a]?t[a]++:t[a]=1}),p.forEach(e=>{const a=e.parentElement.dataset.name;e.textContent=t[a]||0})}function L(){g.addEventListener("click",function(t){if(t.target.tagName.toLowerCase()==="a"){t.preventDefault(),document.querySelectorAll(".active").forEach(s=>{s.classList.remove("active")}),t.target.classList.add("active");const a=t.target.dataset.name;if(a==="全部"){f();return}let l="",n=!1;i.forEach(function(s){String(s.area)===String(a)&&(l+=o(s),n=!0)}),n?c.innerHTML=l:c.innerHTML=`
        <div class="bg-primary-600 w-100 mt-3" style="text-align: center;margin: auto;padding: 20px;min-height: 150px;">
            <span class="loader"></span>
        </div>
        `}})}
