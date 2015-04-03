let debug = require('debug')('deckGenerator');
let Card = require("./Card");
let Deck = require("./Deck");
let generateSymbol = require("./generateSymbol");

let _computeMinfactor = (dimensions) => {
  let minFactor = dimensions;
  let poweredDimensions = 1 + Math.floor(Math.pow(dimensions, 0.5));

  debug(`poweredDimensions = ${poweredDimensions}`)
  for (let i = 2; i < poweredDimensions; ++i) {
    if (dimensions % i == 0) {
      minFactor = i;
      break;
    }
  }

  return minFactor;
}

let deckGenerator = (generateSymbolFunc = generateSymbol) => {
  if (typeof generateSymbolFunc != 'function') {
    throw new Error('generateSymbolFunc must be a function.');
  }

  let generator = (dimensions = 8) => {
    let dimensionsForComputations = dimensions - 1;
    debug(`dimensions: ${dimensions}`);
    if (typeof dimensions != 'number') {
      throw new Error('dimensions must be a number.');
    }

    let numberOfDifferentCards = (dimensions * dimensions) - dimensions + 1;
    let numberOfDifferentSymbols = (((dimensions - 1) * (numberOfDifferentCards - 1)) / dimensions) + dimensions;

    let symbols = Array.from(generateSymbolFunc(numberOfDifferentSymbols));
    let cards = [];
    let minFactor = _computeMinfactor(dimensionsForComputations);

    debug(`minFactor: ${minFactor}`);
    debug(`numberOfDifferentCards: ${numberOfDifferentCards}`);
    debug(`symbols (${numberOfDifferentSymbols}): ${Array.from(symbols)}`);

    for (let i = 0; i < dimensionsForComputations; ++i) {
      let cardSymbols = [];

      for (let j = 0; j < dimensionsForComputations; ++j) {
        cardSymbols.push(symbols[i * dimensionsForComputations + j]);
      }
      cardSymbols.push(symbols[dimensionsForComputations * dimensionsForComputations]);
      let card = new Card(cardSymbols);
      debug(`card: ${card}`);
      cards.push(card);
    }

    for (let i = 0; i < minFactor; ++i) {
      for (let j = 0; j < dimensionsForComputations; ++j) {
        let cardSymbols = [];
        for (let k = 0; k < dimensionsForComputations; ++k) {
          cardSymbols.push(symbols[k * dimensionsForComputations + (j + i * k) % dimensionsForComputations]);
        }

        cardSymbols.push(symbols[dimensionsForComputations * dimensionsForComputations + 1 + i]);
        let card = new Card(cardSymbols);
        debug(`card: ${card}`);
        cards.push(card);
      }
    }

    let cardSymbols = [];
    for (let i = 0; i < (minFactor + 1); ++i) {
      cardSymbols.push(symbols[dimensionsForComputations * dimensionsForComputations + i]);
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
