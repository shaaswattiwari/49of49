const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerHTML = Math.floor(Math.random() * 50000);
});
setInterval(increment, 500);
function increment() {
  var inc = Math.floor(Math.random() * 100);
  counters.forEach((counter) => {
    counter.innerHTML = Number(counter.innerHTML) + inc;
  });
}
