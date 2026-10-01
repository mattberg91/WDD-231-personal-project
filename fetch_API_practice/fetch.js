




const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
async function getPokemon(url) {
    const results = await fetch(url);
    dostuff(results);
}

getPokemon(url);

    




 