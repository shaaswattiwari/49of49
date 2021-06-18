const tagElement = document.querySelector(".tags");

const text = document.querySelector("#text");
text.focus();
text.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    randomSelect();
    e.target.value = "";
  } else {
    createTags(e.target.value);
  }
});
function createTags(x) {
  const tags = x
    .split(" ")
    .filter((tag) => tag !== "")
    .filter((tag) => tag !== "\n");
  tagElement.innerHTML = "";
  tags.forEach((tag) => {
    const newTag = document.createElement("span");
    newTag.classList.add("tag");
    newTag.innerHTML = tag;
    tagElement.appendChild(newTag);
  });
}

function randomSelect() {
  var z = document.querySelectorAll(".tag");
  var a = Math.floor(Math.random() * z.length);
  var counter = 0;
  var m = setInterval(() => {
    if (counter == 50) {
      clearInterval(m);
    } else {
      counter++;
      var k = Math.floor(Math.random() * z.length);
      var l = Math.floor(Math.random() * z.length);
      z[k].classList.remove("highlight");
      z[l].classList.add("highlight");
    }
  }, 20);
  setTimeout(() => {
    z.forEach((v) => {
      v.classList.remove("highlight");
      v.classList.remove("highlightFont");
    });
    z[a].classList.add("highlight");
    z[a].classList.add("highlightFont");
  }, 1100);
}
