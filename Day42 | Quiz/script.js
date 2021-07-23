const question = document.querySelector(".question");
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const container = document.querySelector(".container");
const submit = document.querySelector(".submit");
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");

var counter = 0;
var sets = [];
var marks = 0;

fetchQuestion();
async function fetchQuestion() {
  const res = await fetch(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=base64"
  );
  var { results } = await res.json();
  sets = [...results];
  createQuestion(sets);
}

function createQuestion(results) {
  inputs.forEach((input) => {
    input.checked = false;
  });
  if (counter > results.length - 1) {
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.innerHTML = `<h2 class="question" style="font-size:40px">Total Marks : ${marks}/10</h2>`;
  } else {
    results = results;
    question.innerText = atob(results[counter].question);
    var options = [
      ...results[counter].incorrect_answers,
      results[counter].correct_answer,
    ];
    shuffleOptions(options);
    function shuffleOptions(options) {
      for (var i = options.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = options[i];
        options[i] = options[j];
        options[j] = temp;
      }
    }
    a.innerText = atob(options[0]);
    b.innerText = atob(options[1]);
    c.innerText = atob(options[2]);
    d.innerText = atob(options[3]);
    counter++;
  }
}

submit.addEventListener("click", () => {
  var ans = "";
  inputs.forEach((input, idx) => {
    if (input.checked == true) {
      ans += labels[idx].innerText;
    }
  });
  if (ans == atob(sets[counter - 1].correct_answer)) {
    marks += 1;
  }
  createQuestion(sets);
});
