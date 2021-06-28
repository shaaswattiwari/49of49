const fill = document.querySelector(".fill");
const para = document.getElementsByTagName("p");
const empties = document.querySelectorAll(".empty");
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});
empties.forEach((empty) => {
  var clone = para[0].cloneNode(true);
  if (!empty.childNodes[0]) {
    empty.appendChild(clone);
  }
});
function dragStart() {
  this.className += " hold";
  setTimeout(() => {
    this.className = "";
  }, 0);
}

function dragEnd() {
  this.className += " fill";
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}
function dragLeave() {
  this.className = "empty";
}
function dragDrop() {
  this.className = "empty";
  this.innerHTML = "";
  this.append(fill);
  empties.forEach((empty) => {
    var clone = para[0].cloneNode(true);
    if (!(empty == this)) {
      empty.innerHTML = "";
      empty.appendChild(clone);
    }
  });
}
