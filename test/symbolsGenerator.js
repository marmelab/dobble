var assert = require("assert");
var SymbolsGenerator = require("../lib/symbolsGenerator");

describe('SymbolsGenerator', () => {
  describe('generate()', () => {
    it('should throw an error when called anything but a number', () => {
      assert.throws(() => SymbolsGenerator.generate());
      assert.throws(() => SymbolsGenerator.generate('g'));
      assert.throws(() => SymbolsGenerator.generate(null));
      assert.throws(() => SymbolsGenerator.generate([]));
    });

    it('should returns a Set of 10 symbols when called with 10', () => {
      let symbols = SymbolsGenerator.generate(10);
      assert.ok(symbols instanceof Set);
    });

    it('should returns a Set of 20 symbols when called with 20', () => {
      let symbols = SymbolsGenerator.generate(20);
      assert.ok(symbols instanceof Set);
    });
  });
});
