const assert = require('assert');

function add(a, b) {
  return a + b;
}


assert.strictEqual(add(2, 3), 5, 'add(2, 3) should return 5');
assert.strictEqual(add(-2, 3), 1, 'add(-2, 3) should return 1');

assert.ok(isNaN(add('foo', 3)), "add('foo', 3) should return NaN");



// Provides a set of assertion tests
// If an expression evaluates to 0 or false, an error is thrown and the program is terminated.
