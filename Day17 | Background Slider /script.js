const body = document.body;
const slides = document.querySelectorAll(".slide");
const left = document.getElementById("left");
const right = document.getElementById("right");

let activeSlide = 0;

bodyBgChange();

function bodyBgChange() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
left.addEventListener("click", () => {
  if (activeSlide == 0) {
    bodyBgChange();
  } else {
    activeSlide--;
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slides[activeSlide].classList.add("active");
    bodyBgChange();
  }
});

right.addEventListener("click", () => {
  if (activeSlide == slides.length - 1) {
    bodyBgChange();
  } else {
    activeSlide++;
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slides[activeSlide].classList.add("active");
    bodyBgChange();
  }
});
