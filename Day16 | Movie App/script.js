const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=43aa32dbc477d00cd41f780a49860615";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=43aa32dbc477d00cd41f780a49860615&query="';

getMovies(API_URL);
async function getMovies(API_URL) {
  const res = await fetch(API_URL);
  const data = await res.json();
  showMovies(data.results);
}
function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <a href="https://www.google.com/search?q=${encodeURIComponent(
      title
    )}" target="_blank"> <img
      src="${IMG_PATH + poster_path}"
      alt="${title}"
    /></a>
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overviewsort(overview)}
    </div>`;
    main.appendChild(movieEl);
  });
}

function overviewsort(overview) {
  var short = overview.substr(0, 234);
  var short = short + "...";
  return short;
}
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
    search.blur();
  } else {
    window.location.reload();
  }
});
