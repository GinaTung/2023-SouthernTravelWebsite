const c="https://two023-south-json-server-vercel-main.onrender.com";localStorage.getItem("token");let e=[];const r=document.querySelector(".attractionWrap");function l(t={}){axios.get(`${c}/attractionsList`).then(function(a){e=a.data,n(),t.changeAttractions&&t.changeAttractions(),t.displayTotalCount&&t.displayTotalCount(),t.displayAreaCounts&&t.displayAreaCounts()}).catch(function(a){console.log(a),alert(`${a.response.status}錯誤`)})}function o(t){return` 
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
  </div>`}function n(){let t="";e.forEach(function(a){t+=o(a)}),r.innerHTML=t}r.addEventListener("click",function(t){const a=t.target.closest(".bi-heart"),i=t.target.closest(".bi-heart-fill");a?s(a):i&&s(i)});function s(t){t.classList.toggle("heart-click"),t.classList.toggle("bi-heart"),t.classList.toggle("bi-heart-fill")}export{r as a,c as b,o as c,e as d,l as g,n as r};
