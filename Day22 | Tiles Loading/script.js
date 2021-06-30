const card = document.querySelector(".card");
const content = document.getElementById("card-content");
const header = document.getElementById("header");

setTimeout(() => {
  card.classList.remove("animated-bg");
  content.classList.remove("loading");
  header.classList.remove("loading");
}, 1500);
