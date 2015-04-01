var assert = require("assert");
var Card = require("../lib/card");

describe('Card', function(){
  describe('#validate()', function(){
    it('should return true when initialized with two symbols and it contains only unique symbols', function(){
      var card = new Card("A", "B");
      assert.equal(true, card.validate());
    });
    it('should return false when initialized with two symbols and it contains identical symbols', function(){
      var card = new Card("A", "A");
      assert.equal(false, card.validate());
    });
    it('should return true when initialized with many symbols and it contains only unique symbols', function(){
      var card = new Card("A", "B", "C", "D", "E", "F", "G", "H", "I");
      assert.equal(true, card.validate());
    });
    it('should return false when initialized with many symbols and it contains identical symbols', function(){
      var card = new Card("B", "C", "A", "D", "A", "F", "G", "H", "A");
      assert.equal(false, card.validate());
    });
  });
});
