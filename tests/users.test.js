// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');

const users = require('../data');

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

test ('obtener todos los usuarios', () =>{
    expect(getUsers()).toStrictEqual(users);
 })

test ('obtener el user', () =>{
    expect(getUser(2)).toStrictEqual(users[1]);
})


// READ documentation