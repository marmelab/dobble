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
      dimensions: 2,
      expectedCards: 3,
      expectedSymbols: 2
    }, {
      dimensions: 3,
      expectedCards: 7,
      expectedSymbols: 3
    }, {
      dimensions: 4,
      expectedCards: 13,
      expectedSymbols: 4
    }, {
      dimensions: 5,
      expectedCards: 21,
      expectedSymbols: 5
    }, {
      dimensions: 6,
      expectedCards: 31,
      expectedSymbols: 6
    }, {
      dimensions: 7,
      expectedCards: 43,
      expectedSymbols: 7
    }, {
      dimensions: 8,
      expectedCards: 57,
      expectedSymbols: 8
    }, {
      dimensions: 9,
      expectedCards: 73,
      expectedSymbols: 9
    }];

    tests.forEach(test => {
      it(`should return a deck with cards containing ${test.expectedSymbols} when called with ${test.dimensions}`, () => {
        let generateDeck = deckGenerator();
        let deck = generateDeck(test.dimensions);

        debug(`${deck}`);

        let cards = deck.cards;

        let invalidCards = cards.filter(c => {
          return c.symbols.length != test.expectedSymbols;
        });

        assert.equal(0, invalidCards.length, `Found ${invalidCards.length} invalid cards\n${invalidCards.join('\n')}`);
      });
    });

    tests.forEach(test => {
      it(`should return a deck with ${test.expectedCards} cards when called with ${test.dimensions}`, () => {
        let generateDeck = deckGenerator();
        let deck = generateDeck(test.dimensions);

        debug(`${deck}`);

        let cards = deck.cards;

        assert.equal(test.expectedCards, cards.length, `Expected ${test.expectedCards} cards, found ${cards.length}`);
      });
    });

    tests.forEach(test => {
      it(`should return a deck with valid cards and pairs when called with ${test.dimensions}`, () => {
        let generateDeck = deckGenerator();
        let deck = generateDeck(test.dimensions);

        debug(`${deck}`);

        assert.ok(deck.isValid(), "Deck is invalid");
      });
    });
  });
});
