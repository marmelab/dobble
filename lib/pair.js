var debug = require('debug')('pair');

class Pair {
  constructor(card1, card2) {
    this.card1 = card1;
    this.card2 = card2;
  }

  validate() {
    if(!this.card1.validate() || !this.card2.validate()){
      return false;
    }

    var identicalFound = 0;

    for (var indexCard1 = 0; indexCard1 < this.card1.symbols.length; indexCard1++) {
      let symbolFromCard1 = this.card1.symbols[indexCard1];

      for (var indexCard2 = 0; indexCard2 < this.card2.symbols.length; indexCard2++) {
        let symbolFromCard2 = this.card2.symbols[indexCard2];

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
