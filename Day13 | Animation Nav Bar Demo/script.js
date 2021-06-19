const toggle = document.querySelector("#toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
