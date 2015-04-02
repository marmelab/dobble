var debug = require('debug')('deck');
var Card = require("../lib/card");
var Pair = require("../lib/pair");

class Deck {
  constructor(cards) {
    if(cards == null){
      throw new Error("You must specify the cards as an array");
    }

    if (cards.find((card) => !(card instanceof Card))){
      throw new Error("You can only pass an array of cards");
    }

    this.cards = cards;
  }

  isValid() {
    debug(`Deck contains ${this.cards.length} cards`);

    if(this.cards.length == 0){
      return false;
    }

    if(this.cards.find((card) => !card.isValid())){
      return false;
    }

    let invalid = this.cards.find((card1, indexCard1) => {
      return this.cards.find((card2, indexCard2) => {
        if(indexCard1 !== indexCard2){
          debug(`card1: ${card1}`);
          debug(`card2: ${card2}`);

          let pair = new Pair(card1, card2);

          if (!pair.isValid()) {
            return true;
          }
        }

        return false;
      });
    });

    return invalid == null;
  }
}

module.exports = Deck;
