const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => {
    doTheTrick(e.target);
  })
);

function doTheTrick(target) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === target) {
      fast.checked = false;
    }
    if (cheap === target) {
      good.checked = false;
    }
    if (fast === target) {
      cheap.checked = false;
    }
  }
}
