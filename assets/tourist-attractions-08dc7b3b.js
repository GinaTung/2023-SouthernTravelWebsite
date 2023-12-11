import"./main-f113c58e.js";import"./border-72444186.js";import{a as u}from"./config-3d28a90d.js";document.getElementById("heart3");let i=[];const s=document.querySelector(".attractionWrap");function f(t={}){axios.get(`${u}/attractionsList`).then(function(a){i=a.data,d(),t.changeAttractions&&t.changeAttractions(),t.displayTotalCount&&t.displayTotalCount(),t.displayAreaCounts&&t.displayAreaCounts()}).catch(function(a){console.log(a),alert(`${a.response.status}錯誤`)})}function l(t){return` 
    <div class="col">
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
  </div>`}function d(){let t="";i.forEach(function(a){t+=l(a)}),s.innerHTML=t}s.addEventListener("click",function(t){const a=t.target.closest(".bi-heart"),e=t.target.closest(".bi-heart-fill");a?o(a):e&&o(e)});function o(t){t.classList.toggle("heart-click"),t.classList.toggle("bi-heart"),t.classList.toggle("bi-heart-fill")}const g=document.querySelector(".attractions-select"),h=document.querySelector(".attractionsNum"),m=document.querySelectorAll(".attractionsNum2");function p(){f({changeAttractions:L,displayTotalCount:v,displayAreaCounts:y})}p();function v(){h.textContent=i.length}function y(){const t={};i.forEach(function(a){const e=a.area;t[e]?t[e]++:t[e]=1}),m.forEach(a=>{const e=a.parentElement.dataset.name;a.textContent=t[e]||0})}function L(){g.addEventListener("click",function(t){if(t.target.tagName.toLowerCase()==="a"){t.preventDefault(),document.querySelectorAll(".active").forEach(n=>{n.classList.remove("active")}),t.target.classList.add("active");const e=t.target.dataset.name;if(e==="全部"){d();return}let c="",r=!1;i.forEach(function(n){String(n.area)===String(e)&&(c+=l(n),r=!0)}),r?s.innerHTML=c:s.innerHTML=`
        <div class="bg-primary-600 w-100 mt-3" style="text-align: center;margin: auto;padding: 20px;min-height: 150px;">
            <span class="loader"></span>
        </div>
        `}})}
