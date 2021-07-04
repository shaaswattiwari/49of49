const button = document.getElementById("button");
const toasts = document.getElementById("toasts");
const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
  "Message Five",
  "Message Six",
  "Message Seven",
];
var counter = 0;
button.addEventListener("click", () => createNotification());

function createNotification() {
  const notifi = document.createElement("div");
  notifi.className = "toast";
  if (counter >= messages.length - 1) {
    counter = 0;
    notifi.innerHTML = messages[counter];
    counter++;
  }
  notifi.innerHTML = messages[counter];
  counter++;
  toasts.insertBefore(notifi, toasts.firstChild);
  setTimeout(() => {
    notifi.remove();
  }, 2000);
}
