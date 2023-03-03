const {sum, substract, multiply, divide, power} = require('../calculator');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect (sum(4,6)).toBe(10);
})

test('substracts a - b', () => {
   expect (substract(6,2)).toBe(4);
})

test('multiplies a * b', () => {
    expect (multiply(6,2)).toBe(12);
})

test('divides a / b', () => {
    expect(divide(10,2)).toBe(5);
})

test('Raises to power a ^ b', () => {
    expect (power(2,1)).toBe(2);
})

