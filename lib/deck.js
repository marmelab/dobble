var debug = require('debug')('deck');
var Card = require("../lib/card");
var Pair = require("../lib/pair");

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

  static generate(symbolsByCardCount) {
    let differentCardsCount = = (symbolsByCardCount*symbolsByCardCount) - symbolsByCardCount + 1;
    let differentSymbolsCount = (((symbolsByCardCount-1)*(differentCardsCount-1)) / symbolsByCardCount) + symbolsByCardCount;

    let symbols = [];
    let cards = [];

    for (let i = 0; i < differentSymbolsCount; i++) {
      symbols.push("S" + i);
    }

    debug(`symbols: ${symbols}`);
    let limit = Math.floor(differentSymbolsCount/2);

    for (let i = 0; i < symbolsCount; i++) {
      let cardSymbols = [];

      for (let j = i; j < symbolsCount; j++) {
        debug(`${cardSymbols.length} < ${limit}`);

        if (cardSymbols.length < limit) {
          cardSymbols.push(symbols[j]);
        }
      }

      if (cardSymbols.length < limit) {
        cardSymbols.push(symbols[0]);
      }

      debug(`cardSymbols: ${cardSymbols}`);

      let card = new Card(cardSymbols);
      cards.push(card);
    }

    return new Deck(cards);
  }
}

module.exports = Deck;
