let fruits = ['apple', 'banana', 'cherry'];
// ➜ ['APPLE', 'BANANA', 'CHERRY']
fruits=fruits.map((data)=>{
     return data.toUpperCase();
 })
console.log(fruits);