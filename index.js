const fs = require('fs');
const path = require('path');
const pkmnList = require('./pokemon_alphabetized');

function start() {
  const dirPath = path.join(__dirname, 'sprites_png');
  const pokemonFromDb = pkmnList
    .map(pkmn => pkmn.identifier.replace(':', '-'));

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      throw Error(err);
    }

    const notPresent = [];

    const fileNames = files.map(file => file.replace('.png', ''));

    pokemonFromDb.forEach(pkmn => {
      if (!fileNames.includes(pkmn)) {
        notPresent.push(pkmn);
      }
    });

    console.log(notPresent);
  });

};


start();