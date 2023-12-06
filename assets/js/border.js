var navbarToggle = document.querySelector(".navbar-toggler");
var navbarBorder = document.querySelector(".border-double-bottom");

navbarToggle.addEventListener("click", function () {
  // 切換樣式
  navbarBorder.classList.toggle("rounded-bottom");
});

