const pokemonCard = document.getElementsByClassName("pokemon-card")[0];
const pokemonInput = document.querySelector("input[name='pokemon']");
const pokemonName = document.getElementsByClassName("pokemon-name")[0];
const pokemonImgContainer = document.getElementsByClassName("pokemon-img-container")[0];
const pokemonImg = document.getElementsByClassName("pokemon-img")[0];
const pokemonType = document.getElementsByClassName("pokemon-type")[0];
const pokemonStats = document.getElementsByClassName("pokemon-stats")[0];
const pokemonMoves = document.getElementsByClassName("pokemon-moves")[0];

const typeColors = {
    normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD'
};

const buscarPokemon = async (e) => {
    e.preventDefault();
    pokemonType.innerHTML = '';
    const url = `https://pokeapi.co/api/v2/pokemon`;
    let value = pokemonInput.value.toLowerCase();
    await fetch(`${url}/${value}`)
        .then(data => data.json())
        .then(response => mostrarPokemon(response))
        .catch(e => noEcontrado(e))
}

const mostrarPokemon = data => {
    const sprite =  data.sprites.other.home.front_default;
    const { stats, types, moves } = data;
    pokemonInput.style.borderColor = '#2a75bb';
    pokemonName.textContent = data.name.toUpperCase();
    pokemonImg.src = sprite;
    cardColor(types);
    mostrarTipo(types);
    mostrarStats(stats);
    mostrarMoves(moves);
}

const mostrarTipo = types => {
    pokemonType.innerHTML = '';
    types.forEach(type => {
        const typeTxt = document.createElement("div");
        typeTxt.style.color = 'white';
        typeTxt.style.fontWeight = 'bold';
        typeTxt.style.backgroundColor = typeColors[type.type.name];
        typeTxt.textContent = type.type.name.toUpperCase();
        pokemonType.appendChild(typeTxt);
    })
}

const mostrarStats = stats => {
    pokemonStats.innerHTML = '';
    stats.forEach( stat => {
        const statsElement = document.createElement("div");
        const statsElementName = document.createElement("div");
        const statsElementAmount = document.createElement("div");
        statsElementName.textContent = stat.stat.name;
        statsElementAmount.textContent = stat.base_stat;
        statsElement.appendChild(statsElementName);
        statsElement.appendChild(statsElementAmount);
        pokemonStats.appendChild(statsElement);
    });
}

const mostrarMoves = moves => {
    pokemonMoves.innerHTML = '';
    pokemonMoves.style.display = 'block';
    const pt = document.createElement('p');
    pt.textContent = 'Moves';
    pt.classList.add("movsTitle");
    pokemonStats.appendChild(pt);
    moves.forEach( move => {
        const pMov = document.createElement('p');
        pMov.textContent = `${move.move.name}`;
        pMov.classList.add("movs");
        pokemonMoves.appendChild(pMov);
    })
}

const cardColor = types => {
    const mainColor = typeColors[types[0].type.name];
    pokemonCard.style.borderColor = mainColor;
    pokemonMoves.style.borderColor = mainColor;
}

const noEcontrado = (e) => {
    pokemonName.textContent = 'NOT FOUND';
    pokemonImg.src = './assets/img/not-found.jpg';
    pokemonImg.style.background =  '#fff';
    pokemonInput.style.borderColor = 'red';
    pokemonCard.style.borderColor = 'black';
    pokemonStats.innerHTML = '';
    pokemonType.innerHTML = '';
    pokemonMoves.innerHTML = '';
    pokemonMoves.style.display = 'none';
}