const container = document.querySelector(".container");
const rightArea = document.querySelector(".right-area");
const leftArea = document.querySelector(".left-area");
const buttonDown = document.querySelector("#button-down");
const buttonUp = document.querySelector("#button-up");
const slidesLength = rightArea.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftArea.style.top = `-${(slidesLength - 1) * 100}vh`;

buttonUp.addEventListener("click", () => changeSlide("up"));
buttonDown.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  if (direction === "up") {
    var sliderHeight = rightArea.clientHeight;
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    var sliderHeight = rightArea.clientHeight;
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }
  rightArea.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  leftArea.style.transform = `translateY(+${
    activeSlideIndex * sliderHeight
  }px)`;
};
