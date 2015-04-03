let debug = require('debug')('Pair');
let Card = require("../lib/Card");

class Pair {
  constructor(card1, card2) {
    if(!(card1 instanceof Card) || !(card2 instanceof Card)){
      throw new Error("Pair must be instantiated with two instances of Card");
    }

    this._card1 = card1;
    this._card2 = card2;
  }

  toString() {
    return `${this._card1} vs ${this._card2}`;
  }

  isValid() {
    if(this._card1 == null || !(this._card1 instanceof Card)){
      return false;
    }

    if(this._card2 == null || !(this._card2 instanceof Card)){
      return false;
    }

    if(!this._card1.isValid() || !this._card2.isValid()){
      return false;
    }

    let total = this._card1.symbols.reduce((count, symbolFromCard1) => {
      let found = this._card2.symbols.reduce((count, symbolFromCard2) => {
        let result = symbolFromCard1 === symbolFromCard2;
        debug(`${symbolFromCard1} === ${symbolFromCard2} => ${result}`);

        return (result) ? ++count : count;
      }, 0);

      return count += found;
    }, 0);

    return total === 1;
  }
}

module.exports = Pair;
