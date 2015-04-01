var debug = require('debug')('card');

class Card {
  constructor() {
    this.symbols = arguments;
  }

  validate() {
    var result = undefined;
    for (let index1 = 0; index1 < this.symbols.length; index1++) {
      let symbol1 = this.symbols[index1];

      for (let index2 = 0; index2 < this.symbols.length; index2++) {
        if(index1 === index2){
          continue;
        }

        let symbol2 = this.symbols[index2];
        debug(`validate - symbols checked: ${symbol1} vs ${symbol2}`);
        result = symbol1 !== symbol2;
        if (!result){
          debug("validate - found identical");
          break;
        }
      }

      if (!result){
        debug("validate - found identical");
        break;
      }
    }

    debug(`validate => ${result}`);

    return result;
  }
}

module.exports = Card;
