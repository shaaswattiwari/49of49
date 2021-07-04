const nav = document.querySelector(".nav");
window.addEventListener("scroll", navChange);

function navChange() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("scrolldown");
  } else {
    nav.classList.remove("scrolldown");
  }
}
