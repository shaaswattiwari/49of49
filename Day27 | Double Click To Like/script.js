const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

var counter = 0;

loveMe.addEventListener("dblclick", (e) => {
  clickHeart(e);
});

function clickHeart(e) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const xInside = e.clientX - e.target.offsetLeft;
  const yInside = e.clientY - e.target.offsetTop;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);
  counter++;

  times.innerHTML = counter;
}
