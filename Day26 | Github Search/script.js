const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (e) {
    if (e.response.status === 404) {
      createErrorCard("There is no profile with this username.");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (e) {
    // if (e.response.status === 404) {
    //   createErrorCard("Problem fetching repositories.");
    // }
  }
}

function createUserCard(user) {
  const cardHTML = `<div class="card">
    <div>
      <img
        class="avatar"
        src="${checkNull(user.avatar_url)}"
        alt="${checkNull(user.name)}"
      />
    </div>
    <div class="user-info">
      <h2>${checkNull(user.name)}</h2>
      <p>
       ${checkNull(user.bio)}
      </p>
      <ul>
        <li>${checkNull(user.followers)}<strong> Followers</strong></li>
        <li>${checkNull(user.following)}<strong> Following</strong></li>
        <li>${checkNull(user.public_repos)}<strong> Repos</strong></li>
      </ul>
      <div id="repos">
      </div>
    </div>
  </div>`;
  main.innerHTML = cardHTML;
}

function checkNull(value) {
  if (value !== null) {
    return value;
  } else {
    return "";
  }
}

function createErrorCard(msg) {
  const cardHTML = `<div class="card"><h1>${msg}</h1></div>`;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
