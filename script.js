// JavaScript para manejar posibles interacciones
document.addEventListener('DOMContentLoaded', function() {
  console.log("Bienvenido a Comida para Todos");

  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Comprobar si el enlace es interno o externo
      if (this.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      } else {
        // Para enlaces externos, seguir el enlace normalmente
        window.location.href = this.getAttribute('href');
      }
    });
  });
});


// JavaScript para manejar posibles interacciones
document.addEventListener('DOMContentLoaded', function() {
  console.log("Bienvenido a Comida para Todos");

  const navbar = document.querySelector('.navbar');
  
  // Detectar desplazamiento de la página
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { // Ajusta el valor para que el cambio suceda más arriba o más abajo
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Efecto de desplazamiento suave para los enlaces de la navbar
  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Comprobar si el enlace es interno o externo
      if (this.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      } else {
        // Para enlaces externos, seguir el enlace normalmente
        window.location.href = this.getAttribute('href');
      }
    });
  });
});

// JavaScript para mostrar y ocultar el menú en dispositivos móviles
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navbarLinks = document.getElementById('navbar-links');

  menuToggle.addEventListener('click', function () {
    navbarLinks.classList.toggle('show');
  });
});
