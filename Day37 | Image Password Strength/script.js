const password = document.querySelector("#password");
const background = document.querySelector(".background");

var blur = 7;
password.addEventListener("input", (e) => {
  if (e.target.value.length >= 0) {
    blur = 7 - e.target.value.length;
    changeblur();
  }
});

function changeblur() {
  background.style.filter = `blur(${blur}px)`;
}
