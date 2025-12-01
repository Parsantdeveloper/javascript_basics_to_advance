// 1. map() - applies function to all items in array
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(x => x ** 2);
console.log(squared);  // Output: [1, 4, 9, 16, 25]

// 2. filter() - creates new array with elements that pass the test
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4]

// 3. reduce() - executes reducer function on each element
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);  // Output: 15

// 4. sort() - sort using a compare function
const words = ["apple", "banana", "cherry", "date"];
const sortedByLength = words.sort((a, b) => a.length - b.length);
console.log(sortedByLength);  // Output: ['date', 'apple', 'banana', 'cherry']