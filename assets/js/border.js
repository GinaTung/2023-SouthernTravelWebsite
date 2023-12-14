document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbar = document.querySelector('.navbar');

    navbarToggler.addEventListener('click', function() {
      navbar.classList.toggle('rounded-navbar');
    });
  });