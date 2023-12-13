import{a as c}from"./config-574966d6.js";let e=[];const l=document.querySelector(".attractionWrap");function f(t={}){axios.get(`${c}/attractionsList`).then(function(a){e=a.data,o(),t.changeAttractions&&t.changeAttractions(),t.displayTotalCount&&t.displayTotalCount(),t.displayAreaCounts&&t.displayAreaCounts()}).catch(function(a){console.log(a),alert(`${a.response.status}錯誤`)})}function r(t){return` 
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
  `}function o(){let t="",a="";e.forEach(function(i){t+=r(i)}),a=n(),l.innerHTML=t+a}l.addEventListener("click",function(t){const a=t.target.closest(".bi-heart"),i=t.target.closest(".bi-heart-fill");a?s(a):i&&s(i)});function s(t){t.classList.toggle("heart-click"),t.classList.toggle("bi-heart"),t.classList.toggle("bi-heart-fill")}export{l as a,e as b,r as c,f as g,n as p,o as r};
