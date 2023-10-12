let navbar=document.querySelector(".navbar");
let fabars=document.querySelector(".barsheader")
let closebar=document.querySelector(".closebar")

  fabars.onclick = () => {
    navbar.classList.add("active");
    fabars.style.display = "none";
    closebar.style.display = "block";
  };
  
  closebar.onclick = () => {
    navbar.classList.remove("active");
    fabars.style.display = "block";
    closebar.style.display = "none";
  };


// Swiper

var swiper = new Swiper(".home-slide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  //swiper team

  
  var swiper = new Swiper(".team-slide", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    
  });
