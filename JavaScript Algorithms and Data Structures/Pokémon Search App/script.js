const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-button");
const typesBackground = {
        normal: '#A8A878',
        fighting: '#C03028',
        flying: '#A890F0',
        poison: '#A040A0',
        ground: '#E0C068',
        rock: '#B8A038',
        bug: '#A8B820',
        ghost: '#705898',
        steel: '#B8B8D0',
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        psychic: '#F85888',
        ice: '#98D8D8',
        dragon: '#7038F8',
        dark: '#705848',
        fairy: '#EE99AC'
    };

async function getPokemon (query) {
    const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${query}`
    const pokemonImgFront = document.querySelector(".pokemon-img-front")
    const pokemonImgBack = document.querySelector(".pokemon-img-back")
    const pokemonNameElement = document.querySelector("#pokemon-name");
    const pokemonIdElement = document.querySelector("#pokemon-id");
    const weightElement = document.querySelector("#weight");
    const heightElement = document.querySelector("#height");
    const typesElement = document.querySelector("#types");
    const statsElement = document.querySelectorAll(".stats");
    const img404 = document.querySelector(".not-found-img");
    const infoContainer = document.querySelector(".info-container");
    const divider = document.querySelector(".divider");

    try {
        if (query === "") {return} 
        const response = await fetch(url);
        const pokemon = await response.json();
        console.log(pokemon)
        //Element from HTML
        
        infoContainer.style.display= "flex";
        divider.style.display="block"
        img404.style.display = "none";
        //Assgin textContent
        pokemonImgFront.style.display = "block"
        pokemonImgBack.style.display = "block"
        pokemonImgFront.src = pokemon.sprites.front_default
        pokemonImgBack.src = pokemon.sprites.back_default

        pokemonNameElement.textContent = pokemon.name.toUpperCase()
        pokemonIdElement.textContent = `#${pokemon.id}`         
        weightElement.textContent = pokemon.weight
        heightElement.textContent = pokemon.height
        
        //Add types and set background color for each type
        typesElement.innerHTML = ""
        const pokemonTypes = pokemon.types.map(element => element.type.name)
        pokemonTypes.forEach(type => {
            const typeToAppend = document.createElement('div')
            typeToAppend.style.background = ( typesBackground[type] || "#FFFFF")
            typeToAppend.classList.add("type")
            typeToAppend.textContent = type.toUpperCase()
            typesElement.appendChild(typeToAppend)
        })
        //Stat
        Array.from(statsElement).forEach((stat,index)=>{stat.textContent = pokemon.stats[index].base_stat})
    }
    catch (err) {
        console.error(err)
        infoContainer.style.display= "none";
        img404.style.display = "block" 
        divider.style.display = "none";
        window.alert("Pokémon not found")
        pokemonImgFront.style.display = "none"
        pokemonImgBack.style.display = "none"

        pokemonNameElement.textContent = ""
        pokemonIdElement.textContent = ""       
        weightElement.textContent = ""
        heightElement.textContent = ""
        typesElement.innerHTML = ""
    }
    finally {
        searchInput.disabled = false;
        searchBtn.disable= false;
        document.body.style.cursor = "default";
        searchBtn.style.background = "#2a75bb";
    }
};
searchBtn.addEventListener('click',() => {
    searchInput.disabled = true;
    searchBtn.disable= true;
    searchBtn.style.background = "#333333";
    document.body.style.cursor = "wait";
    getPokemon(searchInput.value.toLowerCase())
})
searchInput.addEventListener('keydown',(event) => {
    if (event.key === "Enter") {
    searchInput.disabled = true;
    searchBtn.disable= true;
    searchBtn.style.background = "#333333";
    document.body.style.cursor = "wait";
    getPokemon(searchInput.value.toLowerCase())
    }
})
