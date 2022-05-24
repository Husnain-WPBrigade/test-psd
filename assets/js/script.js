const menuBtn = document.querySelector(".utility__menu");
const navbar = document.querySelector(".nav");
const menuClosebtn = document.querySelector(".menu-close");
const notificationBtn = document.querySelector(".close--container");
const notificationBar = document.querySelector(".notification");
const videoPlayBtn = document.querySelectorAll(".play-video");
const videoCloseBtn = document.querySelector(".video__close-btn");
const videoBox = document.querySelector(".video--box");
const navLinks = document.querySelectorAll(".nav__link-item");

const navInput = document.querySelector(".nav--input");
const inputClearBtn = document.querySelector(".input-cross");
const inputSearchBtn = document.querySelector(".input-search");

navInput.addEventListener("click", searchInputActive);
inputClearBtn.addEventListener("click", searchInputEmpty);

function searchInputActive() {
  inputSearchBtn.classList.add("input-hide");
  inputClearBtn.classList.remove("input-hide");
}

function searchInputEmpty(e) {
  e.preventDefault(e);
  navInput.value = "";
  inputSearchBtn.classList.remove("input-hide");
  inputClearBtn.classList.add("input-hide");
}

// menuBtn.addEventListener('click', )

menuBtn.addEventListener("click", () => {
  menuClosebtn.classList.remove("menu-btn-hide");
  menuBtn.classList.add("menu-btn-hide");
  navbar.classList.toggle("active");
});

menuClosebtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuClosebtn.classList.add("menu-btn-hide");
  menuBtn.classList.remove("menu-btn-hide");
});

notificationBtn.addEventListener("click", () => {
  notificationBar.classList.add("close");
});

videoPlayBtn.forEach((playBtn) => {
  playBtn.addEventListener("click", () => {
    videoBox.classList.add("video-show");
  });
});

videoCloseBtn.addEventListener("click", () => {
  videoBox.classList.remove("video-show");
});

var swiper = new Swiper(".hero-slider__swiper", {
  // spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".hero-slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".hero-slider__next",
    prevEl: ".hero-slider__prev",
  },
});

// Card Slider
var swiper2 = new Swiper(".card__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".card__slider-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".card__next",
    prevEl: ".card__prev",
  },
});
