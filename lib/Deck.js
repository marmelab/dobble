let debug = require('debug')('Deck');
let Card = require("./Card");
let Pair = require("./Pair");

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

        if (result) {
          debug(`card = ${card} is invalid`);
        }

        return result;
      })) {
      return false;
    }

    let invalidPairs = [];
    let invalid = this.cards.filter((card1, indexCard1) => {
      return this.cards.find((card2, indexCard2) => {
        if (indexCard1 !== indexCard2) {
          let pair = new Pair(card1, card2);

          if (!pair.isValid()) {
            invalidPairs.push(pair);

            debug(`invalid pair = \n ${pair}`);
            return true;
          }
        }

        return false;
      });
    });

    if(invalid.length > 0){
      debug('='.repeat(80));
      debug(`Invalid pairs: ${invalidPairs.length}`);
      invalidPairs.forEach(p => {
        debug(p);
      })
    }

    return invalid.length == 0;
  }

  toString() {
    let result = `Deck of ${this.cards.length} cards \n`
    result += '-'.repeat(80);
    result += `\n`;

    this.cards.forEach(card => {
      result += `${card}\n`;
    });

    return result;
  }
}

module.exports = Deck;
