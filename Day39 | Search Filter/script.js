const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getData();
filter.addEventListener("input", (e) => {
  filterData(filter.value);
});

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();
  result.innerHTML = "";
  results.forEach((user) => {
    const li = document.createElement("li");
    listItems.push(li);
    li.innerHTML = `
        <img src="${user.picture.large}" alt="" />
        <div class="user-info">
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>${user.location.country}</p>
        </div>`;

    result.appendChild(li);
  });
}

function filterData(search) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
