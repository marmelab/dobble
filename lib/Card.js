let debug = require('debug')('Card');

class Card {
  constructor(symbols) {
    if (symbols == null || !(symbols instanceof Array)) {
      throw new Error("You must specify the card symbols as an array: new Card(['x', 'y', 'z']);")
    }

    this._symbols = symbols;
  }

  /** Returns a copy of the card's symbols */
  get symbols() {
    return this._symbols.slice();
  }

  isValid() {
    if (this._symbols == null || !(this._symbols instanceof Array)) {
      return false;
    }

    return !this._symbols.find((symbol1, index1) => {
      return this._symbols.find((symbol2, index2) => {
        return index1 !== index2 && symbol1 === symbol2;
      });
    });
  }

  toString() {
    return this._symbols.join('\t');
  }
}

module.exports = Card;
