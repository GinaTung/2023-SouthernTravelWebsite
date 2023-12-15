import { api_url } from "./config.js";
const emailInput = document.querySelector('#inputEmail1');
const passwordInput = document.querySelector('#inputPassword1');
const check = document.querySelector('#check1'); // Add this line
const signUpBtn = document.querySelector('#signUpBtn');
// console.log(txt);
signUpBtn.addEventListener('click', function(e){
    const email = emailInput.value;
    const password = passwordInput.value;
    const isChecked = check.checked;
    if (email === "" || password === "" || !isChecked) {
        alert("請輸入內容");
        return;
    }

    axios.post(`${api_url}/signup`, {
        "email": email,
        "password": password
    })
    .then(function (response) {
        console.log(response.data);
        alert("註冊成功")
        window.location.href ="logIn.html";
    })
    .catch(err => {
        console.log(err.response);
        alert(err.response.data);
    });

    emailInput.value = "";
    passwordInput.value = "";
    check.checked = false;
});