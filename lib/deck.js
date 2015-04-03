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

  static _computeMinfactor(p){
    let minFactor = p;

    for (let i = 2; i < (Math.pow(p, 0.5)); i++) {
      if (p % i == 0){
        minFactor = i;
        break;
      }
    }

    return minFactor;
  }

  static generate(p) {
    let differentCardsCount = (p*p) - p + 1;
    let differentSymbolsCount = (((p-1)*(differentCardsCount-1)) / p) + p;

    let symbols = SymbolsGenerator.generate(differentSymbolsCount);
    let cards = [];
    let minFactor = Deck._computeMinfactor(p);
    debug(`minFactor: ${minFactor}`);

    for (let i = 0; i < p; i++){
      let cardSymbols = [];

      for (let j = 0; j < p; j++) {
        cardSymbols.push(i * p + j);
      }
      cardSymbols.push((p*p));
      let card = new Card(cardSymbols);
      debug(`card: ${card}`);
      cards.push(card);
    }

    for (let i = 0; i < minFactor; i++) {
      for (let j = 0; j < p; j++) {
        let cardSymbols = [];
        for (var k = 0; k < p; k++) {
          cardSymbols.push(k * p + (j + i * k) % p);
        }

        cardSymbols.push((p*p+1+i));
        let card = new Card(cardSymbols);
        debug(`card: ${card}`);
        cards.push(card);
      }
    }

    let cardSymbols = [];
    for (var i = 0; i < (minFactor + 1); i++) {
      cardSymbols.push(p * p + i);
    }

    let card = new Card(cardSymbols);
    debug(`card: ${card}`);
    cards.push(card);

    return new Deck(cards);
  }

}

module.exports = Deck;
