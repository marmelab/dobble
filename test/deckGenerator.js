let assert = require("assert");
let Card = require("../lib/Card");
let Pair = require("../lib/Pair");
let Deck = require("../lib/Deck");
let deckGenerator = require("../lib/deckGenerator");
let debug = require('debug')('deckGenerator');


describe('deckGenerator()', () => {
  it(`should return a function when called with no arguments`, () => {
    let generateDeck = deckGenerator();
    assert.equal('function', typeof generateDeck);
  });

  it(`should throw an error when called with anything other than a function`, () => {
    assert.throws(() => deckGenerator(42));
    assert.throws(() => deckGenerator("42"));
    assert.throws(() => deckGenerator([42]));
  });

  describe('deckGenerator().generateSymbol', () => {
    it(`should return a function when called without arguments`, () => {
      let generateDeck = deckGenerator();
      assert.equal('function', typeof generateDeck.generateSymbol);
    });
  });

  describe('deckGenerator()()', () => {
    let tests = [{
      dimensions: 2
    }, {
      dimensions: 3
    }, {
      dimensions: 4
    }, {
      dimensions: 5
    }, {
      dimensions: 6
    }, {
      dimensions: 7
    }, {
      dimensions: 8
    }, {
      dimensions: 9
    }];

    tests.forEach(test => {
      it(`should return a deck with valid cards and pairs when called with ${test.dimensions}`, () => {
        let generateDeck = deckGenerator();
        let deck = generateDeck(test.dimensions);

        debug(`${deck}`);

        assert.ok(deck.isValid());
      });
    });
  });
});
