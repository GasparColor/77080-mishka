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


 /*modal*/

 	var modalOpen = document.querySelector(".catalog-item__buy");

  var modalPopup = document.querySelector(".modal-section");

     modalOpen.addEventListener("click", function(event) {
        event.preventDefault();
        modalPopup.classList.add("modal-open");
      });

      modalClose.addEventListener("click", function(event) {
        event.preventDefault();
        modalPopup.classList.remove("modal-open");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (modalPopup.classList.contains("modal-open")) {
            modalPopup.classList.remove("modal-open");
          }
        }
      });
