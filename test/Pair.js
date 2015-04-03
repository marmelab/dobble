let assert = require("assert");
let Card = require("../lib/Card");
let Pair = require("../lib/Pair");

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
      let card1 = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      let card2 = new Card(["A", "A", "K", "L", "M", "N", "O", "P", "Q"]);
      let pair = new Pair(card1, card2);
      assert.ok(!pair.isValid());
    });

    it('should return true when cards have only one identical symbol', () => {
      let card1 = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      let card2 = new Card(["Z", "J", "K", "L", "M", "N", "O", "P", "A"]);
      let pair = new Pair(card1, card2);
      assert.ok(pair.isValid());
    });

    it('should return false when cards have more than one identical symbol', () => {
      let card1 = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      let card2 = new Card(["A", "B", "K", "L", "M", "N", "O", "P", "Q"]);
      let pair = new Pair(card1, card2);
      assert.ok(!pair.isValid());
    });

    it('should return false when cards do not have any identical symbol', () => {
      let card1 = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      let card2 = new Card(["J", "K", "L", "M", "N", "O", "P", "Q", "R"]);
      let pair = new Pair(card1, card2);
      assert.ok(!pair.isValid());
    });
  });
});
