// merge and sort arrays 
const a = [3, 1, 4];
const b = [2, 5];
/* Output ➜ [1, 2, 3, 4, 5] */

const c=[...a,...b];
c.sort()
console.log(c)