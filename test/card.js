var assert = require("assert");
var Card = require("../lib/card");

describe('Card', () => {
  describe('constructor()', () => {
    it('should throw an error when instanciated with no values', () => {
      assert.throws(() => new Card());
    });

    it('does not accept anything that is not an array', () => {
      assert.throws(() => new Card(42));
    });

    it('accepts an array of values', () => {
      var card = new Card(['a', 'b', 'c']);
      assert.equal(3, card.symbols.length);
    });
  });

  describe('isValid()', () => {
    it('should return true when initialized with two unique symbols', () => {
      var card = new Card(["A", "B"]);
      assert.ok(card.isValid());
    });

    it('should return false when initialized with two identical symbols', () => {
      var card = new Card(["A", "A"]);
      assert.ok(!card.isValid());
    });

    it('should return true when initialized with many unique symbols', () => {
      var card = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      assert.ok(card.isValid());
    });

    it('should return false when initialized with many symbols and at least one is not uniqque', () => {
      var card = new Card(["B", "C", "A", "D", "A", "F", "G", "H", "A"]);
      assert.ok(!card.isValid());
    });
  });
});