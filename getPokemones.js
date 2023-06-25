// import axios from "axios"

export const getPokemones = (async () => {
try {
    // const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=30"
    const dataRaw = await axios(URL)
    // const data = await dataRaw.json()
    console.log("data: ", dataRaw.data.results[0].name)
} catch (error) {
    console.log("error es: ", error)
}
})();
//IIFE --> Immediately Invoked Function Expressions

const nombrePokemon = document.getElementById("name-pokemon");
console.log("pokemon: ", nombrePokemon)