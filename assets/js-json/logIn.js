import { api_url } from "./config.js";
let userId;
const emailInput2 = document.querySelector("#inputEmail2");
const passwordInput2 = document.querySelector("#inputPassword2");
const logInBtn = document.querySelector("#logInBtn");
const check2 = document.querySelector("#check2");
let token;
logInBtn.addEventListener("click", function (e) {
  const email = emailInput2.value;
  const password = passwordInput2.value;
  const isChecked = check2.checked; // Assuming check2 is a checkbox

  if (email === "" || password === "" || !isChecked) {
    alert("請輸入內容");
    return;
  }

  axios
    .post(`${api_url}/login`, {
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log(response); // 記錄整個回應物件
      userId = response.data.user.id; // 从响应数据中获取userId
      token = response.data.accessToken;
      localStorage.setItem("userId", userId); // 将userId存储到localStorage中
      localStorage.setItem("token", token);
      // 根據使用者的角色進行跳轉
      if (response.data.user.role === "admin") {
        // 如果角色為 admin，跳轉至後台畫面
        window.location.href = `index.html?userId=${userId}&role=${response.data.user.role}&token=${token}`;

      } else {
        // 如果角色為 user，跳轉至產品列表畫面
        window.location.href = `index.html?userId=${userId}&token=${token}`;
      }
      alert("登入成功");
    })

    .catch((err) => {
      console.log(err);
      alert("登入失敗"); // Display the error message from the server, or a default message
    });

  // Reset input values and checkbox
  emailInput2.value = "";
  passwordInput2.value = "";
  check2.checked = false;
});
