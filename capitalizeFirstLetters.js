const assert = require('assert');

function capitalizeFirstLetters(input){
    return input.length > 0
    ? input.split(' ').map(x=>x[0].toUpperCase() + x.slice(1)).join(' ')
    : '';
}

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that capitalizeFirstLetters accept more than one word
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD')
// Check that capitalizeFirstLetters transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');