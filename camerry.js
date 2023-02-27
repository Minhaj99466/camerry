window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });