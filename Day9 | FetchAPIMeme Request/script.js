var btn = document.querySelector(".btn");
var image = document.querySelector(".imgg");
btn.addEventListener("click", working);
function working() {
  image.src = "";
  var apii = fetch("https://meme-api.herokuapp.com/gimme");
  apii
    .then((value) => {
      var theobject = value.json();
      return theobject;
    })
    .then((theobject) => {
      image.src = theobject.preview[3];
      image.alt = "May-May Loading....";
    })
    .catch(() => {
      image.src =
        "https://i.scdn.co/image/ab67616d0000b273950359444321d635b59838b3";
      image.alt = "Press GO";
    });
}
