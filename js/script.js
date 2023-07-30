// Hiding navigation after clicking the link
const links = document.querySelectorAll(".navigation__item");
const navBtn = document.querySelector(".navigation__checkbox");

links.forEach((link) => {
  link.addEventListener("click", () => (navBtn.checked = false));
});
