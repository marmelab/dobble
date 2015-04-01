var debug = require('debug')('card');

class Card {
  constructor() {
    if (arguments.length === 0) {
      throw new Error("You must specify the card values: new Card('x', 'y', 'z');")
    }

    if(arguments[0] instanceof Array){
      this._symbols = arguments[0];
    } else {
      this._symbols = Array.from(arguments);
    }
  }

  get symbols() {
    return this._symbols.slice();
  }

  validate() {
    var result;

    if(this._symbols == null || !(this._symbols instanceof Array)){
      return false;
    }

    for (let index1 = 0; index1 < this._symbols.length; index1++) {
      let symbol1 = this._symbols[index1];

      for (let index2 = 0; index2 < this._symbols.length; index2++) {
        if(index1 === index2){
          continue;
        }

        let symbol2 = this._symbols[index2];
        debug(`validate - symbols checked: ${symbol1} vs ${symbol2}`);
        result = symbol1 !== symbol2;

        if (!result){
          debug("validate - found identical");
          break;
        }
      }

      if (!result){
        break;
      }
    }

    debug(`validate => ${result}`);
    return result;
  }
}

module.exports = Card;
