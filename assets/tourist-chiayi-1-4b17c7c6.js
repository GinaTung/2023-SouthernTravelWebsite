import"./main-d15728ed.js";import"./logOut-11a5dfa3.js";import"./border-a743e317.js";import{a as u}from"./config-3d28a90d.js";const c=document.querySelector(".attractionWrap");function o(t){return` 
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card card-att h-100">
      <span class="tag text-white">${t.area}</span>
      <div class="card-att-img">
        <img src=".${t.images}" class="card-img-top img-fluid " alt="${t.title}">
      </div>
      <div class="heart3">
        <i class="bi bi-heart heart-click" data-heartStatus="false" data-heartId="${t.attractionId}"></i>
      </div>
      <div style="transform: rotate(0);">
        <div class="card-body card-body-att">
          <div class="card-title  d-flex justify-content-between align-items-center card-title-att">
            <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att">${t.title}</h4>
          </div>
          <p class="card-text card-font-truncate">
          ${t.description}
          </p>
        </div>
        <div class="card-footer text-end border-0">
          <a href="tourist-chiayi-1.html?attractionId=${t.attractionId}" class="fs-5 stretched-link">more</a>
        </div>

      </div>
    </div>
  </div>`}function d(){return`
  <nav class="mt-10 d-flex justify-content-center">
                <ul class="pagination mb-0">
                  <li class="page-item"><a class="page-link" href="#">上一頁</a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">下一頁</a></li>
                </ul>
              </nav> 
  `}c.addEventListener("click",function(t){const e=t.target.closest(".bi-heart"),a=t.target.closest(".bi-heart-fill");e?r(e):a&&r(a)});function r(t){t.classList.toggle("heart-click"),t.classList.toggle("bi-heart"),t.classList.toggle("bi-heart-fill")}let s=[];const g=document.querySelector(".attractionsNum"),h=document.querySelectorAll(".attractionsNum2"),f=document.querySelector(".attractions-select");function m(){axios.get(`${u}/attractionsList`).then(function(t){s=t.data,p(),v()}).catch(function(t){console.log(t),alert(`${t.response.status}錯誤`)})}m();L();function p(){g.textContent=s.length}function v(){const t={};s.forEach(function(e){const a=e.area;t[a]?t[a]++:t[a]=1}),h.forEach(e=>{const a=e.parentElement.dataset.name;e.textContent=t[a]||0})}function L(){f.addEventListener("click",function(t){t.target.tagName.toLowerCase()==="a"&&(t.preventDefault(),document.querySelectorAll(".active").forEach(a=>{a.classList.remove("active")}),t.target.classList.add("active"))})}function l(){c.innerHTML=`
    <div class="bg-primary-600 w-100 mt-3" style="text-align: center;margin: auto;padding: 20px;min-height: 150px;">
      <span class="loader"></span>
    </div>
  `}function y(){let t="",e="";s.forEach(function(a){t+=o(a)}),e=d(),c.innerHTML=t+e}f.addEventListener("click",function(t){const e=t.target.dataset.name;if(e==="全部")l(),y();else{let a=!1,n="";if(s.forEach(function(i){String(i.area)===String(e)&&(n+=o(i),a=!0)}),!a)l();else{let i="";i=d(),c.innerHTML=n+i}}});
