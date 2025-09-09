const burger = document.querySelector(".navbar__btn");
const navList = document.querySelector(".navbar__list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
});