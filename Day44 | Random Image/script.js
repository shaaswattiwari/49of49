const images = document.querySelector(".images");

var counters = 0;
var insert = setInterval(() => {
  if (counters <= 8) {
    images.insertAdjacentHTML(
      "beforeend",
      ` <img src="https://source.unsplash.com/random/${h()}x${w()}" alt="" />`
    );
    counters++;
  } else {
    clearInterval(insert);
  }
});

function h() {
  return Math.floor(Math.random() * (1800 - 900) + 900);
}
function w() {
  return Math.floor(Math.random() * (1800 - 900) + 900);
}
