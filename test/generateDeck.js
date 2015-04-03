let assert = require("assert");
let Card = require("../lib/card");
let Pair = require("../lib/pair");
let Deck = require("../lib/deck");
let generateDeck = require("../lib/generateDeck");
let debug = require('debug')('generateDeck');


describe('generateDeck()', function() {
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
  }, {
    dimensions: 16
  }, {
    dimensions: 27
  }];

  tests.forEach(test => {
    it(`should return a deck with valid cards and pairs when called with ${test.dimensions}`, function() {
      this.timeout(0);
      let deck = generateDeck(test.dimensions);

      debug(`${deck}`);

      assert.ok(deck.isValid());
    });
  });
});
