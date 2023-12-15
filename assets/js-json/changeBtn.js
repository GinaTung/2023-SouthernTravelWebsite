// import { logInBtnMain } from "./logIn.js";
// const btnSignLogin = document.querySelector(".btn-sign-login");
// const dropdownMember = document.querySelector(".dropdown-member");
// const urlParams2 = new URLSearchParams(window.location.search);
// const userId = urlParams2.get("userId");
// const roleData = urlParams2.get("role");

// let token;
// function checkLoggedIn() {
//   if (!token && !userId) {
//     renderDefaultData();
//   } else {
//     renderProtectedData();
//   }
// }

// function renderProtectedData() {
//   let str1 = "";
//   str1 = `
//       <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
//       Dropdown link
//       </a>
  
//       <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuLink">
//       <li><a class="dropdown-item" href="#">Action</a></li>
//       <li><a class="dropdown-item" href="#">Another action</a></li>
//       <li><a class="dropdown-item" href="#">Something else here</a></li>
//       </ul>
//       `;
//   dropdownMember.innerHTML = str1;
// }

// logInBtnMain.addEventListener("click", function () {
//   window.location.href = `index.html?userId=${userId}&token=${token}`;
// });

// function renderDefaultData() {
//   let str2 = "";
//   str2 = `
//     <a href="logIn.html" class="btn-outline-turquoise" type="button">登入</a>
//     <a href="signUp.html" class="btn-turquoise ms-3" type="button">註冊</a>
//     `;
//   btnSignLogin.innerHTML = str2;
// }

// checkLoggedIn();
