const play = document.querySelector(".play");
const body = document.getElementsByTagName("BODY")[0];
const insects = document.querySelectorAll(".insect");
const time = document.querySelector(".time");
const score = document.querySelector(".score");
const insertarea = document.querySelector(".insertarea");

var newscore = 0;

var insectsArray = [
  "http://pngimg.com/uploads/fly/fly_PNG3946.png",
  "http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png",
  "http://pngimg.com/uploads/roach/roach_PNG12163.png",
  "http://pngimg.com/uploads/spider/spider_PNG12.png",
];

var selected = 0;

play.addEventListener("click", () => {
  body.style.transform = `translateY(-100vh)`;
});

insects.forEach((insect, idx) => {
  insect.addEventListener("click", (e) => {
    selected = idx;
    body.style.transform = `translateY(-200vh)`;
    timechange();
    insertInsect(selected);
  });
});

function insertInsect(idx, f = 1) {
  for (let i = 0; i < f; i++) {
    function getRandomPosition(element) {
      var x = insertarea.offsetHeight - element.clientHeight;
      var y = insertarea.offsetWidth - element.clientWidth;
      var randomX = Math.floor(Math.random() * x);
      var randomY = Math.floor(Math.random() * y);
      return [randomX, randomY];
    }

    var imgEl = document.createElement("img");
    imgEl.src = insectsArray[idx];
    imgEl.classList.add("insertedInsect");
    imgEl.setAttribute("style", "position:absolute;");
    imgEl.addEventListener("click", (e) => {
      e.target.remove();
      newscore++;
      scoreUpdate(newscore);
      insertInsect(selected, 2);
    });
    insertarea.appendChild(imgEl);
    var position = getRandomPosition(imgEl);
    imgEl.style.top = position[0] + "px";
    imgEl.style.left = position[1] + "px";
    imgEl.style.transform = `rotate(${position[0]}deg)`;
  }
}

function timechange() {
  var counter = 20;
  time.innerText = `Time: 00:${counter}`;
  var timer = setInterval(() => {
    if (counter !== 0) {
      counter--;
      time.innerText = `Time: 00:${counter}`;
    } else {
      clearInterval(timer);
      time.innerText = "Time: 00:00";
      timeover();
    }
  }, 1000);
}

function scoreUpdate(newscore) {
  score.innerText = `Score:${newscore}`;
}

function timeover() {
  insertarea.innerHTML = "";
  insertarea.style.display = "flex";
  insertarea.style.flexDirection = "column";
  insertarea.style.justifyContent = "center";
  insertarea.style.alignItems = "center";
  insertarea.style.textAlign = "center";
  insertarea.style.fontSize = "34px";
  insertarea.innerText = `Time-Over Score:${newscore}`;
  var btn = document.createElement("button");
  btn.style.margin = "25px";
  btn.classList.add("play");
  btn.innerText = "Play Again";
  btn.addEventListener("click", () => {
    location.reload();
  });
  insertarea.appendChild(btn);
}
