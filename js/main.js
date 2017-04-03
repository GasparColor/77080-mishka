var modal_open = document.querySelector(".featured-item__btn");
var product_buy = document.querySelectorAll(".catalog-item__buy");

var modal = document.querySelector(".modal-section");
var modal_overlay = document.querySelector(".modal-section");


if (modal_open) {
    modal_open.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal-open");
  });
};

/*if (modal_overlay) {
modal_overlay.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("modal-open");
});
};*/

window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (modal.classList.contains("modal-open")) {
            modal.classList.remove("modal-open");
          }
        }
      });


for (var i = 0; i < product_buy.length; i++) {
    product_buy[i].addEventListener("click", function(event) {
        event.preventDefault();
        if (modal) {
            modal.classList.add("modal-open");
        }
    });
}

 /*nav-*/

 var navMain = document.querySelector(".main-nav");
    var navToggle = document.querySelector(".main-nav__toggle");

    navMain.classList.remove("main-nav--nojs");

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains("main-nav--closed")) {
        navMain.classList.remove("main-nav--closed");
        navMain.classList.add("main-nav--opened");
      } else {
        navMain.classList.add("main-nav--closed");
        navMain.classList.remove("main-nav--opened");
      }
    });
