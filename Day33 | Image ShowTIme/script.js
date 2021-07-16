const img = document.querySelectorAll("img");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const images = document.getElementById("imgs");

var idx = 0;
const totalImages = img.length - 1;

setInterval(run, 2000);

function changeImg() {
  if (idx > totalImages) {
    idx = 0;
  } else if (idx < 0) {
    idx = totalImages;
  }
  images.style.transform = `translateX(${-idx * 500}px)`;
}

function run() {
  idx++;
  changeImg();
}

right.addEventListener("click", () => {
  idx++;
  changeImg();
});

left.addEventListener("click", () => {
  idx--;
  changeImg();
});
