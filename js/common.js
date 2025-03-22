document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  var html = document.querySelector('html'),
    menuToggle = document.querySelector(".hamburger"),
    menuList = document.querySelector(".main-nav"),
    toggleTheme = document.querySelector(".toggle-theme-js"),
    btnScrollToTop = document.querySelector(".top");

  // Menu Toggle
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("is-open");
    menuList.classList.toggle("is-visible");
  });

  // Theme Switcher
  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      if (html.classList.contains('dark-mode')) {
        html.classList.remove('dark-mode');
        localStorage.removeItem("theme");
        document.documentElement.removeAttribute("dark");
      } else {
        html.classList.add('dark-mode');
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("dark", "");
      }
    });
  }

  // Scroll Top Button
  window.addEventListener("scroll", function () {
    window.scrollY > window.innerHeight ? btnScrollToTop.classList.add("is-active") : btnScrollToTop.classList.remove("is-active");
  });

  btnScrollToTop.addEventListener("click", function () {
    if (window.scrollY != 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  });
});
