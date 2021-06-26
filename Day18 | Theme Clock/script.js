const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minute");
const secEl = document.querySelector(".second");
const toggleEl = document.querySelector(".toggle");
const timeEl = document.querySelector(".time");
const dayEl = document.querySelector(".date");
const dateEl = document.querySelector(".circle");

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

setInterval(timeUpdate, 1000);

toggleEl.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

function timeUpdate() {
  var d = new Date();
  var exactHours = d.getHours() + d.getMinutes() / 60;
  dayEl.innerHTML = `${days[d.getDay()]}, ${
    months[d.getMonth()]
  }<span class="circle">${d.getDate()}</span>`;
  timeEl.innerHTML = d
    .toLocaleTimeString()
    .substr(0, d.toLocaleTimeString().lastIndexOf(":"));

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    exactHours,
    0,
    12,
    0,
    360
  )}deg)`;

  minEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    d.getMinutes(),
    0,
    60,
    0,
    360
  )}deg)`;

  secEl.style.transform = `translate(-50%, -100%) rotate(${
    d.getSeconds() * 6
  }deg)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
