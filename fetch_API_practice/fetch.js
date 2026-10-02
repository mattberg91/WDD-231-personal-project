
// const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
// async function getPokemon(url) {
//     const results = await fetch(url);
//     dostuff(results);
// }

// getPokemon(url);

// function doStuff(data) {
//   results = data;
//   console.log("first: ", results);
// }


// const url = "https://pokeapi.co/api/v2/pokemon/ditto";
// const urlList = "https://pokeapi.co/api/v2/pokemon";

// let results = null;
// async function getPokemon(url) {
//   const response = await fetch(url);
//   //check to see if the fetch was successful
//   if (response.ok) {
//     // the API will send us JSON...but we have to convert the response before we can use it
//     // .json() also returns a promise...so we await it as well.
//     const data = await response.json();
//     doStuff(data);
//   }
// }

// async function getPokemonList(url) {
//     const response = await fetch(url);

//     if (response.ok) {

//         const data = await response.json()
//         doStuffList(data)
//     }
// }

// function doStuff(data) {
//     const outputElement = document.querySelector("#output");
//     results = data;
//     const html = `<h2 class="pokemon-name">${results.name}</h2>
//                     <img src="${results.sprites.front_default}" alt="${results.name} class="pokemon-image">`;
//     outputElement.innerHTML = html;
//     console.log("first: ", results);

// }


// function doStuffList(data) {
//     const pokeList = data.results;
//     const outputList = document.querySelector("#outputList");
    
//     pokeList.forEach(function (pokemon) {
//         const html = `<li class="pokemon-name">${pokemon.name}</li>`;

//         outputList.innerHTML += html;
//     });
//     console.log(pokeList);
// }


// getPokemonList(urlList);
// getPokemon(url);
// console.log("second: ", results);




const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    // execute the callback
    doThis(data);
  }
}

function compare(a, b) {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  // a must be equal to b
  return 0;
}


function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList;
}

function doStuff(data) {
  results = data;
  const outputElement = document.querySelector("#output");
  const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="${data.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
}

function doStuffList(data) {
  console.log(data);
  const pokeListElement = document.querySelector("#outputList");
  let pokeList = data.results;
  pokeList = sortPokemon(pokeList);
  pokeList.forEach((currentItem) => {
    const html = `<li data-url="${currentItem.url}">${currentItem.name}</li>`;
    // note the += here...
    pokeListElement.innerHTML += html;
  });
}


getPokemon(url, doStuff);
console.log("second: ", results);
// Notice that by just passing a different callback function in
// we can totally change what happens when the data comes back.
// It's like we gave the getPokemon function superpowers!
getPokemon(urlList, doStuffList);