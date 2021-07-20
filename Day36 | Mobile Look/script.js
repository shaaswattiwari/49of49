const images = document.querySelectorAll("img");
const btns = document.querySelectorAll(".tab");

btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.classList.remove("show");
    });
    btn.classList.add("show");

    images.forEach((img) => {
      img.className = "";
      img.classList.add("notshow");
    });
    images[idx].className = "";
    images[idx].classList.add("show");
  });
});
