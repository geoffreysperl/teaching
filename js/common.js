document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  var menuToggle = document.querySelector(".hamburger"),
    menuList = document.querySelector(".main-nav"),
    btnScrollToTop = document.querySelector(".top");

  // Menu Toggle
  menuToggle && menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("is-open");
    menuList.classList.toggle("is-visible");
  });

  // Scroll Top Button
  btnScrollToTop && window.addEventListener("scroll", function() {
    window.scrollY > window.innerHeight 
      ? btnScrollToTop.classList.add("is-active") 
      : btnScrollToTop.classList.remove("is-active");
  });

  btnScrollToTop && btnScrollToTop.addEventListener("click", function() {
    window.scrollY && window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Initialize Lazy Loading
  new LazyLoad();
});