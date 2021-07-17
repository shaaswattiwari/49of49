const container = document.querySelector(".container");

var i = 1;
while (i <= 504) {
  const square = document.createElement("div");
  square.className = "square";
  container.appendChild(square);
  i++;
}

function getRandomColor(square) {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  square.style.backgroundColor = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    getRandomColor(square);
  });
  square.addEventListener("mouseout", () => {
    setTimeout(() => {
      square.style.boxShadow = "";
      square.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
    }, 650);
  });
});
