let debug = require('debug')('deckGenerator');
let Card = require("./Card");
let Deck = require("./Deck");
let generateSymbol = require("./generateSymbol");

let deckGenerator = (generateSymbolFunc = generateSymbol) => {
  if (typeof generateSymbolFunc != 'function') {
    throw new Error('generateSymbolFunc must be a function.');
  }

  let generator = (dimensions = 8) => {
    if (typeof dimensions != 'number') {
      throw new Error('dimensions must be a number.');
    }

    let numberOfDifferentCards = (dimensions * dimensions) - dimensions + 1;
    let numberOfDifferentSymbols = (((dimensions - 1) * (numberOfDifferentCards - 1)) / dimensions) + dimensions;

    let symbols = generateSymbolFunc(numberOfDifferentSymbols);
    let cards = [];
    let minFactor = Deck._computeMinfactor(dimensions);

    debug(`minFactor: ${minFactor}`);
    debug(`numberOfDifferentCards: ${numberOfDifferentCards}`);
    debug(`numberOfDifferentSymbols: ${numberOfDifferentSymbols}`);

    for (let i = 0; i < dimensions; i++) {
      let cardSymbols = [];

      for (let j = 0; j < dimensions; j++) {
        cardSymbols.push(i * dimensions + j);
      }
      cardSymbols.push((dimensions * dimensions));
      let card = new Card(cardSymbols);
      debug(`card: ${card}`);
      cards.push(card);
    }

    for (let i = 0; i < minFactor; i++) {
      for (let j = 0; j < dimensions; j++) {
        let cardSymbols = [];
        for (let k = 0; k < dimensions; k++) {
          cardSymbols.push(k * dimensions + (j + i * k) % dimensions);
        }

        cardSymbols.push((dimensions * dimensions + 1 + i));
        let card = new Card(cardSymbols);
        debug(`card: ${card}`);
        cards.push(card);
      }
    }

    let cardSymbols = [];
    for (let i = 0; i < (minFactor + 1); i++) {
      cardSymbols.push(dimensions * dimensions + i);
    }

    let card = new Card(cardSymbols);
    debug(`card: ${card}`);
    cards.push(card);

    return new Deck(cards);
  };

  generator.generateSymbol = (newGenerateSymbolFunc) => {
    // getter if no arguments
    if (arguments.length == 0) return generateSymbolFunc;

    generateSymbolFunc = newGenerateSymbolFunc
    return generator;
  }

  return generator;
};

module.exports = deckGenerator;
