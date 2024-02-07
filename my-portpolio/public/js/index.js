// Toggle mobile menu
  document.getElementById('menu-toggler').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });

  // Close mobile menu
  document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.add('hidden');
  });

  // Initialize Typed.js
  document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed-word', {
      strings: ["Developer", "Coder", "Programmer", "Software Developer"],
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 1000,
      showCursor: true,
      cursorChar: "|",
      loop: true,
    });
  });

//   function scrollToSection(sectionId) {
//     const section = document.getElementById(sectionId);
//     section.scrollIntoView({ behavior: 'smooth' });
//   }