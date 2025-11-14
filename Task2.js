const numbers = [2, 5, 8, 10, 12];

const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

const filtered = numbers.filter(num => num > 6);
console.log("Filtered (>6):", filtered);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

console.log("Includes 8?", numbers.includes(8));
console.log("Index of 10:", numbers.indexOf(10));

const sorted = [...numbers].sort((a, b) => a - b);
console.log("Sorted ascending:", sorted);
