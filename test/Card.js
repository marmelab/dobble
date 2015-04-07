let assert = require("assert");
let Card = require("../lib/Card");

describe('Card', () => {
  describe('constructor()', () => {
    it('should throw an error when called with no values', () => {
      assert.throws(() => new Card());
    });

    it('does not accept anything that is not an array', () => {
      assert.throws(() => new Card(42));
    });

    it('accepts an array of values', () => {
      let card = new Card(['a', 'b', 'c']);
      assert.equal(3, card.symbols.length);
    });
  });

  describe('isValid()', () => {
    it('should return true when initialized with unique symbols', () => {
      let card = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      assert.ok(card.isValid());
    });

    it('should return false when initialized with non unique symbols', () => {
      let card = new Card(["B", "C", "A", "D", "A", "F", "G", "H", "A"]);
      assert.ok(!card.isValid());
    });
  });
});
