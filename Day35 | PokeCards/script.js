const poke_container = document.getElementById("poke-container");
const poke_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const fetchPokemons = async () => {
  for (let i = 1; i <= poke_count; i++) {
    await getPokemons(i);
  }
};

const getPokemons = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createCard(
    data.id,
    data.name,
    data.types[0].type.name,
    data.sprites.other["official-artwork"].front_default
  );
};

fetchPokemons();

function createCard(id, name, type, image) {
  const pokemon = document.createElement("div");
  pokemon.style.backgroundColor = `${colors[type]}`;
  pokemon.classList.add("pokemon");
  pokemon.innerHTML = `<div class="img-container">
  <img
    src="${image}"
    alt=""
  />
</div>
<div class="info">
  <span class="number">#${id}</span>
  <h3 class="name">${name.toUpperCase()}</h3>
  <small class="type">Type:<span>${type}</span></small>
</div>`;
  poke_container.appendChild(pokemon);
}
