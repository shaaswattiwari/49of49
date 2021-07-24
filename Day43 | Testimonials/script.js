const message = document.querySelector(".message");
const image = document.querySelector(".image");
const name = document.querySelector(".name");
const post = document.querySelector(".post");

var counter = 0;

async function getTestimonials() {
  var res = await fetch("https://testimonialapi.toolcarton.com/api");
  var data = await res.json();
  setInterval(() => {
    updateTestimonials(data);
    counter++;
  }, 10000);
}
getTestimonials();

function updateTestimonials(data) {
  image.src = data[counter].avatar;
  message.innerText = data[counter].message;
  name.innerText = data[counter].name;
  post.innerText = data[counter].designation;
}
