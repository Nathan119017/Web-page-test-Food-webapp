// JavaScript para mostrar y ocultar el menú en dispositivos móviles
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarLinks = document.getElementById('navbar-links');
  
    menuToggle.addEventListener('click', function () {
      navbarLinks.classList.toggle('show');
    });
  });
  