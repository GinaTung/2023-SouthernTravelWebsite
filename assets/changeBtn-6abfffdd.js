const l="/2023-SouthernTravelWebsite/assets/logo-525b0b6e.png",s=document.querySelector(".menu2"),n=document.querySelector(".menu"),r=new URLSearchParams(window.location.search),a=r.get("userId");let e;function i(){a?o():c()}function o(){let t="";t=`
      <a class="navbar-brand py-6 mx-0 " href="index.html">
      <img src="${l}" alt="南部輕旅遊">
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <!-- <img src="../assets/images/menu.png" alt="menu" value="img" id="img"> -->
      <i class="bi bi-list" style="font-size: 3rem; color: #0EA0A6;"></i>
    </button>
    <div class="collapse navbar-collapse py-10 py-lg-0" id="navbarText">
      <ul class="navbar-nav m-auto mb-lg-0 align-items-center">
        <li class="nav-item mb-10 mb-lg-0">
          <a class="nav-link px-5 px-xl-10 fs-5 text-dark" href="tourist-attractions.html?userId=${a}&token=${e}">南部旅遊景點</a>
        </li>
        <li class="nav-item mb-10 mb-lg-0">
          <a class="nav-link px-5 px-xl-10 fs-5 text-dark" href="tourist-package.html?userId=${a}&token=${e}">南部旅遊方案</a>
        </li>
        <li class="nav-item mb-10 mb-lg-0">
          <a class="nav-link px-5 px-xl-10 fs-5 text-dark" href="tourist-budget.html?userId=${a}&token=${e}">南部旅遊預算</a>
        </li>
      </ul>
      <div
        class="dropdown dropdown-member ms-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <a class="btn btn-outline-turquoise dropdown-toggle px-2" href="#" role="button" id="dropdownMenuLink"
          data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
          <i class="bi bi-person-circle fs-5 px-2" style="color:#43B8BD;"></i>
        </a>
        <a href="#" class="btn-turquoise ms-3" type="button" id="logOutBtn">登出</a>
        <ul class="dropdown-menu rounded-1 py-1" aria-labelledby="dropdownMenuLink" style="border:1px solid #43B8BD">
          <li class="userName px-4">123</li>
          <li><a class="dropdown-item" href="favorite-list.html?userId=${a}&token=${e}">收藏列表</a></li>
        </ul>
      </div>
    </div>
      `,n.innerHTML=t}function c(){let t="";t=`
      <a class="navbar-brand py-6 mx-0 " href="index.html">
      <img src="${l}" alt="南部輕旅遊">
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <!-- <img src="../assets/images/menu.png" alt="menu" value="img" id="img"> -->
      <i class="bi bi-list" style="font-size: 3rem; color: #0EA0A6;"></i>
    </button>
    <div class="collapse navbar-collapse py-10 py-lg-0" id="navbarText">
      <ul class="navbar-nav m-auto mb-lg-0 align-items-center">
        <li class="nav-item mb-10 mb-lg-0">
          <a class="nav-link px-5 px-xl-10 fs-5 text-dark" href="tourist-attractions.html">南部旅遊景點</a>
        </li>
        <li class="nav-item mb-10 mb-lg-0">
          <a class="nav-link px-5 px-xl-10 fs-5 text-dark" href="tourist-package.html">南部旅遊方案</a>
        </li>
        <li class="nav-item mb-10 mb-lg-0">
          <a class="nav-link px-5 px-xl-10 fs-5 text-dark" href="tourist-budget.html">南部旅遊預算</a>
        </li>
      </ul>

      <div
        class="d-flex border-top border-top-lg-0 pt-5 pt-lg-0 justify-content-center justify-content-lg-start btn-sign-login">
        <a href="logIn.html" class="btn-outline-turquoise" type="button">登入</a>
        <a href="signUp.html" class="btn-turquoise ms-3" type="button">註冊</a>
      </div>
      </div>
    `,s.innerHTML=t}i();const d=document.querySelector("#logOutBtn");d.addEventListener("click",u);function u(){alert("登出成功"),localStorage.removeItem("userId"),window.location.href="index.html"}
