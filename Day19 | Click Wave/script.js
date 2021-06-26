const area = document.querySelector("header");
area.addEventListener("click", function (e) {
  const x = e.clientX;
  const y = e.clientY;
  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = y + "px";
  circle.style.left = x + "px";
  this.appendChild(circle);
  setTimeout(() => circle.remove(), 500);
});
