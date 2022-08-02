const header_nav = document.querySelector(".header_nav");
const toggleButton = document.getElementById("toggleButton");
const navList = document.querySelector("#navList");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    header_nav.classList.add("activeNav");
  } else {
    header_nav.classList.remove("activeNav");
  }
});

// nav bar
toggleButton.addEventListener("click", () => {
  navList.classList.toggle("activeNavBar");
});
