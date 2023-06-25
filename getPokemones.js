// import axios from "axios"
document.addEventListener("DOMContentLoaded", function () {
  //API
  const getPokemones = (async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=20";
      const dataRaw = await axios(URL);
      // const data = await dataRaw.json()
      console.log("data: ", dataRaw.data.results);
      const pokemones = dataRaw.data.results;
      const arrayPoke = [];
      for (let i = 0; i < pokemones.length; i++) {
        let pokeUrl = pokemones[i].url;
        arrayPoke.push(pokeUrl);
      }
      return arrayPoke;
    } catch (error) {
      console.log("error es: ", error);
    }
  })();
  console.log(getPokemones);
  //create pokemon Card
  const createPokemon = getPokemones.then((res) => {
    const urls = res;
    console.log(urls)
    urls.forEach( async (url) => {
      const poke = await axios(url);
      const nombre = poke.data.name
      const image = poke.data.sprites.other.dream_world.front_default
      const id = poke.data.id
      //cards
      const container = document.getElementById('container-cards')
      const card = document.createElement('div')
      card.className = 'card-style'
      container.appendChild(card)
      card.innerHTML = `<h2 style="color:red">${nombre}</h2><img src=${image} style="width:150px"></img><p style="text-align:center">#${id}</p>`
     
      

    });
  }).catch((error) => console.log("error", error));
  console.log(createPokemon)
});
