function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input type. Both arguments must be numbers.');
  }
  return a + b;
}

const result1 = add(1, '2'); // Type error expected, but not thrown. It will compile successfully and potentially return unexpected results at runtime. 

const result2 = addSafe(1, 2);  // Correct use
const result3 = addSafe(1, '2'); // throws error correctly
console.log(result2); // Output: 3
console.log(result3); // throws error: Invalid input type. Both arguments must be numbers.