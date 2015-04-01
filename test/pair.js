var assert = require("assert");
var Card = require("../lib/card");
var Pair = require("../lib/pair");

describe('Pair', function(){
  describe('#validate()', function(){

    it('should return false when any card is not valid', function(){
      var card1 = new Card("A", "B", "C", "D", "E", "F", "G", "H", "I");
      var card2 = new Card("A", "A", "K", "L", "M", "N", "O", "P", "Q");
      assert.equal(true, card1.validate());
      assert.equal(false, card2.validate());
      var pair = new Pair(card1, card2);
      assert.equal(false, pair.validate());
    });

    it('should return true when cards contains only one identical symbol', function(){
      var card1 = new Card("A", "B", "C", "D", "E", "F", "G", "H", "I");
      var card2 = new Card("Z", "J", "K", "L", "M", "N", "O", "P", "A");
      var pair = new Pair(card1, card2);
      assert.equal(true, pair.validate());
    });

    it('should return false when cards contains more than one identical symbol', function(){
      var card1 = new Card("A", "B", "C", "D", "E", "F", "G", "H", "I");
      var card2 = new Card("A", "B", "K", "L", "M", "N", "O", "P", "Q");
      var pair = new Pair(card1, card2);
      assert.equal(false, pair.validate());
    });

    it('should return false when cards does not contains any identical symbol', function(){
      var card1 = new Card("A", "B", "C", "D", "E", "F", "G", "H", "I");
      var card2 = new Card("J", "K", "L", "M", "N", "O", "P", "Q", "R");
      var pair = new Pair(card1, card2);
      assert.equal(false, pair.validate());
    });
  });
});
