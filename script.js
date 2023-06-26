
const iconMenu = document.getElementById("icon-menu");
const mainMenu = document.getElementById("main-menu");
const closeMenu = document.getElementById("icon-close");

iconMenu.addEventListener("click", () => {
  iconMenu.style.display = "none";
  mainMenu.classList.toggle("menu-show");
});
// closeMenu.addEventListener("click", () => {
//   iconMenu.style.display = "flex";
// });
// closeMenu.addEventListener("click", () =>
//   mainMenu.classList.toggle("menu-show")
// );
// mainMenu.addEventListener("click", () =>
//   mainMenu.classList.toggle("menu-show")
// );
// mainMenu.addEventListener("click", () => {
//   iconMenu.style.display = "flex";
// });
// closeMenu.addEventListener("click", () =>
//   mainMenu.classList.toggle("menu-show")
// );
