import"./main-d15728ed.js";import{a as l}from"./config-3d28a90d.js";const n=document.querySelector("#inputEmail1"),c=document.querySelector("#inputPassword1"),s=document.querySelector("#check1"),r=document.querySelector("#signUpBtn");r.addEventListener("click",function(i){const o=n.value,t=c.value,a=s.checked;if(o===""||t===""||!a){alert("請輸入內容");return}axios.post(`${l}/signup`,{email:o,password:t}).then(function(e){console.log(e.data),alert("註冊成功"),window.location.href="logIn.html"}).catch(e=>{console.log(e.response),alert(e.response.data)}),n.value="",c.value="",s.checked=!1});