var debug = require('debug')('symbolsGenerator');

class SymbolsGenerator {
  static generate(number) {
    if (typeof number != 'number'){
      throw new Error("You must specify the number of symbols to generate.");
    }

    let symbols = new Set();

    for (let i = 0; i < number; i++) {
      symbols.add("S" + i);
    }

    return symbols;
  }
}

module.exports = SymbolsGenerator;
