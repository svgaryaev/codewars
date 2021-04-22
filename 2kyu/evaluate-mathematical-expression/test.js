const assert = require('chai').assert;
const calc = require('./solution');

describe('2kyu Evaluate mathematical expression', () => {
    it('should return a valid single input number', () =>{
        assert.equal(calc('1'), 1);
        assert.equal(calc('1.1'), 1.1);
        assert.equal(calc('127'), 127);
    });

    it('should perform simple single operations', () =>{
        assert.equal(calc('2 + 3'), 5);
        assert.equal(calc('1 - 1'), 0);
        assert.equal(calc('2 / 2'), 1);
        assert.equal(calc('2 * 2'), 4);
    });

    it('should work with decimal numbers', () =>{
        assert.equal(calc('1.1 + 1.9'), 3);
        assert.equal(calc('9 / 4'), 2.25);
        assert.equal(calc('1.5 * 3'), 4.5);
        assert.equal(calc('5 - 43.2'), -38.2);
    });

    it('should accept many of same operator', () =>{
        assert.equal(calc('5 + 5 + 5 + 5'),  20);
        assert.equal(calc('5 - 5 - 5 - 5'),  -10);
        assert.equal(calc('5 * 5 * 5 * 5'),  625);
        assert.equal(calc('5 / 5 / 5 / 5'),  0.04);
    });

    it('should work with parenthesis', () =>{
        assert.equal(calc('2 * (3 + 4)'), 14);
        assert.equal(calc('(2 + 3) * 4'), 20);
        assert.equal(calc('((2 + 3) * 4)'), 20);
        assert.equal(calc('14 - (3 + 2) * 2 - 6 / 2'), 1);
        assert.equal(calc('(2 * (2 + 3)) * 4'), 40);
        assert.equal(calc('((2 + 2) * 3) * 4'), 48);
    });

    it('should work with negative numbers', () =>{
        assert.equal(calc('-1 + 1'), 0);
        assert.equal(calc('12 - -8 + 10'), 30);
    });

    it('should work with negative numbers and parenthesis', () =>{
        assert.equal(calc('-(-2)'), 2);
        assert.equal(calc('10 + -(-5 + -5)'), 20);
    });

    it('should calculate everything thrown at it', () =>{
        assert.equal(calc('2 /2+3 * 4.75- -6'), 21.25);
        assert.equal(calc('2 / (2 + 3) * 4.33 - -6'), 7.732);
        assert.equal(calc('12* 123/-(-5 + 2)'), 492);
    });
});
