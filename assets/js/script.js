const menuBtn = document.querySelector(".utility__menu");
const navbar = document.querySelector(".nav");
const menuClosebtn = document.querySelector('.menu-close')
const notificationBtn = document.querySelector(".close--container");
const notificationBar = document.querySelector(".notification");
const videoPlayBtn = document.querySelectorAll(".play-video");
const videoCloseBtn = document.querySelector(".video__close-btn");
const videoBox = document.querySelector(".video--box");
const navLinks = document.querySelectorAll(".nav__link-item");
const inputSearch = document.querySelector('#input--search')
const inputSearchIcon = document.querySelector('.input__search')
const inputCrossIcon = document.querySelector('.input-cross')
const input = document.querySelector('.nav--input')

// menuBtn.addEventListener('click', )

menuBtn.addEventListener("click", () => {
  menuClosebtn.classList.remove('menu-btn-hide')
  menuBtn.classList.add('menu-btn-hide')
  navbar.classList.toggle("active");
});

menuClosebtn.addEventListener('click', () => {
  navbar.classList.toggle('active')
  menuClosebtn.classList.add('menu-btn-hide')
  menuBtn.classList.remove('menu-btn-hide')
})

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

inputSearch.addEventListener('keypress', ()=> {
  inputSearchIcon.classList.add('input-hide')
  inputCrossIcon.classList.remove('input-hide')
})


inputCrossIcon.addEventListener('click', () => {
  input.value = ''
  inputSearchIcon.classList.remove('input-hide')
  inputCrossIcon.classList.add('input-hide')
})


// Hero Slider
var swiper1 = new Swiper(".hero__slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".hero__slider-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".hero__slider-arrow-next",
    prevEl: ".hero__slider-arrow-next",
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

