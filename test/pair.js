var assert = require("assert");
var Card = require("../lib/card");
var Pair = require("../lib/pair");

describe('Pair', () => {
  describe('constructor()', () => {
    it('should throw an error when instanciated with no arguments', () => {
      assert.throws(() => new Pair());
    });

    it('should throw an error when instanciated with only one argument', () => {
      assert.throws(() => new Pair(new Card([1,2])));
    });

    it('should throw an error when instanciated with non Card arguments', () => {
      assert.throws(() => new Pair(1, 2));
    });
  });

  describe('isValid()', () => {

    it('should return false when any card is not valid', () => {
      var card1 = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      var card2 = new Card(["A", "A", "K", "L", "M", "N", "O", "P", "Q"]);
      var pair = new Pair(card1, card2);
      assert.ok(!pair.isValid());
    });

    it('should return true when cards contains only one identical symbol', () => {
      var card1 = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      var card2 = new Card(["Z", "J", "K", "L", "M", "N", "O", "P", "A"]);
      var pair = new Pair(card1, card2);
      assert.ok(pair.isValid());
    });

    it('should return false when cards contains more than one identical symbol', () => {
      var card1 = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      var card2 = new Card(["A", "B", "K", "L", "M", "N", "O", "P", "Q"]);
      var pair = new Pair(card1, card2);
      assert.ok(!pair.isValid());
    });

    it('should return false when cards does not contains any identical symbol', () => {
      var card1 = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      var card2 = new Card(["J", "K", "L", "M", "N", "O", "P", "Q", "R"]);
      var pair = new Pair(card1, card2);
      assert.ok(!pair.isValid());
    });
  });
});
