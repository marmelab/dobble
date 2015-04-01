var debug = require('debug')('pair');
var Card = require("../lib/card");

class Pair {
  constructor(card1, card2) {
    if(!(card1 instanceof Card) || !(card2 instanceof Card)){
      throw new Error("Pair must be instantiated with two instances of Card");
    }

    this._card1 = card1;
    this._card2 = card2;
  }

  validate() {
    if(this._card1 == null || !(this._card1 instanceof Card)){
      return false;
    }

    if(this._card2 == null || !(this._card2 instanceof Card)){
      return false;
    }

    if(!this._card1.validate() || !this._card2.validate()){
      return false;
    }

    var identicalFound = 0;

    for (var indexCard1 = 0; indexCard1 < this._card1.symbols.length; indexCard1++) {
      let symbolFromCard1 = this._card1.symbols[indexCard1];

      for (var indexCard2 = 0; indexCard2 < this._card2.symbols.length; indexCard2++) {
        let symbolFromCard2 = this._card2.symbols[indexCard2];

        if (symbolFromCard1 === symbolFromCard2){
          identicalFound++;

          if(identicalFound > 1){
            break;
          }
        }
      }

      if(identicalFound > 1){
        break;
      }
    }

    return identicalFound === 1;
  }
}

module.exports = Pair;
