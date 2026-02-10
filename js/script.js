// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#kripik-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// untuk hilangin nav
const kripik = document.querySelector("#kripik-menu");

document.addEventListener("click", function (e) {
  if (!kripik.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
