const keyname = document.querySelector(".keyname");
const keycode = document.querySelector(".keycode");
const eventcode = document.querySelector(".eventcode");
window.addEventListener("keyup", keyMap);
function keyMap(x) {
  if (x.key === " ") {
    keyname.innerHTML = "space";
    keycode.innerHTML = x.keyCode;
    eventcode.innerHTML = x.code;
  } else {
    keyname.innerHTML = x.key;
    keycode.innerHTML = x.keyCode;
    eventcode.innerHTML = x.code;
  }
}
