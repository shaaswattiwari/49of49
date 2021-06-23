const smallcups = document.querySelectorAll(".smallcup");
const liters = document.getElementById("liters");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");

updateBigCup();

smallcups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    highlightcups(idx);
  });
});

function highlightcups(idx) {
  if (
    smallcups[idx].classList.contains("fill") &&
    (idx === 7 || !smallcups[idx + 1].classList.contains("fill"))
  ) {
    idx--;
  }
  smallcups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("fill");
    } else {
      cup.classList.remove("fill");
    }
  });

  updateBigCup();
}
function updateBigCup() {
  const fullcups = document.querySelectorAll(".fill").length;
  const totalcups = document.querySelectorAll(".smallcup").length;
  if (fullcups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullcups / totalcups) * 380}px`;
    percentage.innerHTML = `${(fullcups / totalcups) * 100}%`;
  }
  if (fullcups === totalcups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";

    liters.innerHTML = `${2 - (250 * fullcups) / 1000}L`;
  }
}
