const ratings = document.querySelectorAll(".rating");
const btn = document.querySelector(".btn");
const panel = document.querySelector("#panel");

var submitted = "NULL";

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratings.forEach((rating) => {
      rating.classList.remove("active");
    });
    submitted = rating.innerText;
    rating.classList.add("active");
  });
});

btn.addEventListener("click", () => {
  panel.innerHTML = `
   <p class="submit"> <i class="fas fa-heart" style="width:80%"></i><br>Thank You <br> Feedback : ${submitted} <br> We'll use your feedback for our improvement.<br></p>
    `;
});
