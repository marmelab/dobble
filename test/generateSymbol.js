let assert = require("assert");
let generateSymbol = require("../lib/generateSymbol");

describe('generateSymbol', () => {
  it('should throw an error when called anything but a number', () => {
    assert.throws(() => generateSymbol());
    assert.throws(() => generateSymbol('g'));
    assert.throws(() => generateSymbol(null));
    assert.throws(() => generateSymbol([]));
  });

  it('should returns a Set of 10 symbols when called with 10', () => {
    let symbols = generateSymbol(10);
    assert.ok(symbols instanceof Set);
  });

  it('should returns a Set of 20 symbols when called with 20', () => {
    let symbols = generateSymbol(20);
    assert.ok(symbols instanceof Set);
  });
});
