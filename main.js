const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuShow = "is-active";
menuToggle.addEventListener("click", handleMenu);
function handleMenu(e) {
  menu.classList.toggle(menuShow);
}
window.addEventListener("click", function (e) {
  if (e.target.matches(".menu-toggle") || e.target.matches(".menu, .menu *"))
    return;
  menu.classList.remove(menuShow);
});
// slick Slider
$(document).ready(function () {
  $(".project-list").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });
});
