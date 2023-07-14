var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".responsive-side-menu");
const sideMenuCrossBtn = document.querySelector(".side-menu-cross-btn");
const cartBtn = document.querySelector(".cart-btn");
const sideCart = document.querySelector(".side-cart");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
});
sideMenuCrossBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});
function openSideCart() {
  sideCart.classList.add("active");
}
function closeSideCart() {
  sideCart.classList.remove("active");
}
