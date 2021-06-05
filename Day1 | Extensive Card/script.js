const panels = document.querySelectorAll(".panel");
panels.forEach((slide) => {
  slide.addEventListener("click", () => {
    removeActive();
    slide.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((slide) => {
    slide.classList.remove("active");
  });
}
