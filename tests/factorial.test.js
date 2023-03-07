const factorial = require('../factorial');

test('El factorial del numero 5 es', ()=>{
    expect(factorial(5)).toStrictEqual(120);
})

