let assert = require("assert");
let Card = require("../lib/Card");
let Deck = require("../lib/Deck");

describe('Deck', () => {
  describe('constructor()', () => {
    it('should throw an error when called with no values', () => {
      assert.throws(() => new Deck());
    });

    it('does not accept anything that is not an array', () => {
      assert.throws(() => new Deck(42));
    });

    it('does not accept an array which contain something else than cards', () => {
      assert.throws(() => new Deck([
        41, 
        new Card([41, 42])
      ]));
    });

    it('accepts an array of cards', () => {
      let deck = new Deck([ 
        new Card(["A", "B"]), 
        new Card(["A", "A"])
      ]);

      assert.equal(2, deck.cards.length);
    });
  });

  describe('isValid()', () => {

    it('should return false when deck is empty', () => {
      let deck = new Deck([]);
      assert.ok(!deck.isValid());
    });

    it('should return false when any card is invalid', () => {
      let card1 = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      let card2 = new Card(["A", "A", "K", "L", "M", "N", "O", "P", "Q"]);
      let deck = new Deck([card1, card2]);

      assert.ok(!deck.isValid());
    });

    it('should return false when any possible pair is invalid', () => {
      let card1 = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      let card2 = new Card(["A", "B", "L", "M", "N", "O", "P", "Q", "R"]);
      let deck = new Deck([card1, card2]);

      assert.ok(!deck.isValid());
    });

    it('should return true when cards and pairs are valid', () => {
      let card1 = new Card(["A", "B"  , "C", "D", "E", "F", "G", "H", "I"]);
      let card2 = new Card(["A", "K", "L", "M", "N", "O", "P", "Q", "R"]);
      let deck = new Deck([card1, card2]);

      assert.ok(deck.isValid());
    });

  });
});
