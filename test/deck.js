var assert = require("assert");
var Card = require("../lib/card");
var Pair = require("../lib/pair");
var Deck = require("../lib/deck");

describe('Deck', function() {
  describe('constructor()', () => {
    it('should throw an error when instanciated with no values', () => {
      assert.throws(() => new Deck());
    });

    it('does not accept anything that is not an array', () => {
      assert.throws(() => new Deck(42));
    });

    it('does not accept an array which contain cards ', () => {
      assert.throws(() => new Deck([41, new Card([41, 42])]));
    });

    it('accepts an array of cards', () => {
      var deck = new Deck([ new Card(["A", "B"]),  new Card(["A", "A"])]);
      assert.equal(2, deck.cards.length);
    });
  });

  describe('isValid()', function() {

    it('should return false when deck is empty', function() {
      var deck = new Deck([]);
      assert.ok(!deck.isValid());
    });

    it('should return false when any card is invalid', function() {
      var card1 = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      var card2 = new Card(["A", "A", "K", "L", "M", "N", "O", "P", "Q"]);
      assert.ok(card1.isValid());
      assert.ok(!card2.isValid());

      var pair = new Pair(card1, card2);
      assert.ok(!pair.isValid());

      var deck = new Deck([card1, card2]);
      assert.ok(!deck.isValid());
    });

    it('should return false when any possible pair is invalid', function() {
      var card1 = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      var card2 = new Card(["A", "B", "L", "M", "N", "O", "P", "Q", "R"]);
      assert.ok(card1.isValid());
      assert.ok(card2.isValid());

      var pair = new Pair(card1, card2);
      assert.ok(!pair.isValid());

      var deck = new Deck([card1, card2]);
      assert.ok(!deck.isValid());
    });

    it('should return true when cards and pairs are valid', function() {
      var card1 = new Card(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
      var card2 = new Card(["A", "K", "L", "M", "N", "O", "P", "Q", "R"]);
      assert.ok(card1.isValid());
      assert.ok(card2.isValid());

      var pair = new Pair(card1, card2);
      assert.ok(pair.isValid());

      var deck = new Deck([card1, card2]);
      assert.ok(deck.isValid());
    });

  });

  describe('generate()', function() {

    it('should return a deck with valid cards and pairs when called with 2', function() {
      var deck = Deck.generate(2);

      assert.ok(deck.isValid());
    });

    it('should return a deck with valid cards and pairs when called with 3', function() {
      var deck = Deck.generate(3);

      assert.ok(deck.isValid());
    });

    it('should return a deck with valid cards and pairs when called with 4', function() {
      var deck = Deck.generate(4);

      assert.ok(deck.isValid());
    });

    it('should return a deck with valid cards and pairs when called with 5', function() {
      var deck = Deck.generate(5);

      assert.ok(deck.isValid());
    });

    it('should return a deck with valid cards and pairs when called with 6', function() {
      var deck = Deck.generate(6);

      assert.ok(deck.isValid());
    });

    it('should return a deck with valid cards and pairs when called with 7', function() {
      var deck = Deck.generate(7);

      assert.ok(deck.isValid());
    });

    it('should return a deck with valid cards and pairs when called with 8', function() {
      var deck = Deck.generate(8);

      assert.ok(deck.isValid());
    });

    it('should return a deck with valid cards and pairs when called with 9', function() {
      var deck = Deck.generate(9);

      assert.ok(deck.isValid());
    });

  });

});
