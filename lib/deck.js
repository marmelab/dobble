var debug = require('debug')('deck');
var Card = require("./card");
var Pair = require("./pair");
var SymbolsGenerator = require("./symbolsGenerator");

class Deck {
  constructor(cards) {
    if (cards == null) {
      throw new Error("You must specify the cards as an array");
    }

    if (cards.find((card) => !(card instanceof Card))) {
      throw new Error("You can only pass an array of cards");
    }

    this.cards = cards;
  }

  isValid() {
    debug(`Deck contains ${this.cards.length} cards`);

    if (this.cards.length == 0) {
      return false;
    }

    if (this.cards.find((card) => {
      let result = !card.isValid();

      if (result){
        debug(`card = ${card} is invalid`);
      }

      return result;
    })) {
      return false;
    }

    let invalid = this.cards.find((card1, indexCard1) => {
      return this.cards.find((card2, indexCard2) => {
        if (indexCard1 !== indexCard2) {
          debug(`card1: ${card1}`);
          debug(`card2: ${card2}`);

          let pair = new Pair(card1, card2);

          if (!pair.isValid()) {
            debug(`pair = ${pair} is invalid`);
            return true;
          }
        }

        return false;
      });
    });

    return invalid == null;
  }

  static _computeMinfactor(numberOfSymbolsPerCard){
    let minFactor = numberOfSymbolsPerCard;

    for (let i = 2; i < (Math.pow(numberOfSymbolsPerCard, 0.5)); i++) {
      if (numberOfSymbolsPerCard % i == 0){
        minFactor = i;
        break;
      }
    }

    return minFactor;
  }

  static generate(numberOfSymbolsPerCard) {
    let numberOfDifferentCards = (numberOfSymbolsPerCard*numberOfSymbolsPerCard) - numberOfSymbolsPerCard + 1;
    let numberOfDifferentSymbols = (((numberOfSymbolsPerCard-1)*(numberOfDifferentCards-1)) / numberOfSymbolsPerCard) + numberOfSymbolsPerCard;

    let symbols = SymbolsGenerator.generate(numberOfDifferentSymbols);
    let cards = [];
    let minFactor = Deck._computeMinfactor(numberOfSymbolsPerCard);
    debug(`minFactor: ${minFactor}`);

    for (let i = 0; i < numberOfSymbolsPerCard; i++){
      let cardSymbols = [];

      for (let j = 0; j < numberOfSymbolsPerCard; j++) {
        cardSymbols.push(i * numberOfSymbolsPerCard + j);
      }
      cardSymbols.push((numberOfSymbolsPerCard*numberOfSymbolsPerCard));
      let card = new Card(cardSymbols);
      debug(`card: ${card}`);
      cards.push(card);
    }

    for (let i = 0; i < minFactor; i++) {
      for (let j = 0; j < numberOfSymbolsPerCard; j++) {
        let cardSymbols = [];
        for (var k = 0; k < numberOfSymbolsPerCard; k++) {
          cardSymbols.push(k * numberOfSymbolsPerCard + (j + i * k) % numberOfSymbolsPerCard);
        }

        cardSymbols.push((numberOfSymbolsPerCard*numberOfSymbolsPerCard+1+i));
        let card = new Card(cardSymbols);
        debug(`card: ${card}`);
        cards.push(card);
      }
    }

    let cardSymbols = [];
    for (var i = 0; i < (minFactor + 1); i++) {
      cardSymbols.push(numberOfSymbolsPerCard * numberOfSymbolsPerCard + i);
    }

    let card = new Card(cardSymbols);
    debug(`card: ${card}`);
    cards.push(card);

    return new Deck(cards);
  }

}

module.exports = Deck;
