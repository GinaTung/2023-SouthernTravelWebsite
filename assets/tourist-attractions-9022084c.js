import"./main-da1d103c.js";import"./border-72444186.js";import{g as s,b as c,r as l,c as u,a as i}from"./viewGetAttractions-86a5c9fe.js";import"./config-574966d6.js";document.getElementById("heart3");const m=document.querySelector(".attractions-select"),d=document.querySelector(".attractionsNum"),f=document.querySelectorAll(".attractionsNum2");function g(){s({changeAttractions:v,displayTotalCount:p,displayAreaCounts:h})}g();function p(){d.textContent=c.length}function h(){const t={};c.forEach(function(e){const a=e.area;t[a]?t[a]++:t[a]=1}),f.forEach(e=>{const a=e.parentElement.dataset.name;e.textContent=t[a]||0})}function v(){m.addEventListener("click",function(t){if(t.target.tagName.toLowerCase()==="a"){t.preventDefault(),document.querySelectorAll(".active").forEach(n=>{n.classList.remove("active")}),t.target.classList.add("active");const a=t.target.dataset.name;if(a==="全部"){l();return}let r="",o=!1;c.forEach(function(n){String(n.area)===String(a)&&(r+=u(n),o=!0)}),o?i.innerHTML=r:i.innerHTML=`
        <div class="bg-primary-600 w-100 mt-3" style="text-align: center;margin: auto;padding: 20px;min-height: 150px;">
            <span class="loader"></span>
        </div>
        `}})}
