const assert = require('chai').assert;
const Calculator = require('./solution');

describe('3kyu Calculator', () => {
    it('test', () => {
        const calculate = new Calculator();

        assert.equal(calculate.evaluate('127'), 127);
        assert.equal(calculate.evaluate('2 + 3'), 5);
        assert.equal(calculate.evaluate('2 - 3 - 4'), -5);
        assert.equal(calculate.evaluate('10 * 5 / 2'), 25);
    });
});
