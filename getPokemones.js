// import axios from "axios"
document.addEventListener("DOMContentLoaded", function () {
  //Consulta a API
const getPokemones = (async () => {
    try {
      // const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=30";
    const dataRaw = await axios(URL);
      // const data = await dataRaw.json()
    console.log("data: ", dataRaw.data.results);
    return dataRaw.data.results;
    } catch (error) {
    console.log("error es: ", error);
    }
})();

  // Ejemplo de utilizacion de la data que responde la API, en otro script
const pokemones = getPokemones.then((res) => {
    const allPokemones = res;

    for (let i = 0; i < allPokemones.length; i++) {
        let element = allPokemones[i];
        let p = document.createElement("p");
        //probar con setAtribute para css
        p.textContent = element.name;
        //   console.log(element.name);
        const container = document.getElementById("container-pokemon");
        container.appendChild(p);
    }
    })
    .catch((error) => console.log("error", error));
    console.log(pokemones)
});