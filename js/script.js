// burger icon
let menuIcon = document.querySelector(".menu-icon");
let navContainer = document.querySelector(".nav-container");

menuIcon.addEventListener("click", () => {
  navContainer.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

//End meun toggle

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

//  Caruosel slider has 2 btn above slider
let next = document.querySelector(".next");
let perv = document.querySelector(".prev");

// perv and next bts
next.addEventListener("click", () => {
  plusSlides(1);
});
perv.addEventListener("click", () => {
  plusSlides(-1);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}
// platform

var platform_slider = new Splide(".platform_slider", {
  type: "loop",
  prev: "splide__arrow--prev .btn-n",
  next: "splide__arrow--next .btn-r",
  gap: "1rem",
  perPage: 6,
  breakpoints: {
    576: {
      perPage: 1,
      pagination: false,
    },
    992: {
      perPage: 2,
    },
    1350: {
      perPage: 3,
    },
  },
});
platform_slider.mount();
// platform
// awarness

var awarness_guids = new Splide(".awarness_guids", {
  type: "loop",
  prev: "splide__arrow--prev .btn-n",
  next: "splide__arrow--next .btn-r",
  gap: "2rem",
  perPage: 3,
  breakpoints: {
    576: {
      perPage: 1,
      pagination: false,
    },
    992: {
      perPage: 2,
    },
    1350: {
      perPage: 3,
    },
  },
});
awarness_guids.mount();

var awarness_posts = new Splide(".awarness_posts", {
  type: "loop",
  prev: "splide__arrow--prev .btn-n",
  next: "splide__arrow--next .btn-r",
  gap: "2rem",
  perPage: 3,
  breakpoints: {
    576: {
      perPage: 1,
      pagination: false,
    },
    992: {
      perPage: 2,
    },
    1350: {
      perPage: 3,
    },
  },
});
awarness_posts.mount();

var awarness_reco = new Splide(".awarness_reco", {
  type: "loop",
  prev: "splide__arrow--prev .btn-n",
  next: "splide__arrow--next .btn-r",
  gap: "2rem",
  // padding:"250px",
  perPage: 2,
  breakpoints: {
    992: {
      perPage: 1,
    },
    1350: {
      perPage: 3,
    },
  },
});

awarness_reco.mount();
// awarness
