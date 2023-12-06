var navbarToggle = document.querySelector(".navbar-toggler");
var navbarBorder = document.querySelector(".border-double-bottom");

navbarToggle.addEventListener("click", function () {
  // 切換樣式
  navbarBorder.classList.toggle("rounded-bottom");
});






// let sum = 0;
// /* 程式碼撰寫 */
// const plusOne = document.querySelector(".plusOne");
// plusOne.addEventListener("click",function(e){
//   sum+=1;
// plusOne.textContent = `＋${sum}`;
//   console.log(sum);
// })