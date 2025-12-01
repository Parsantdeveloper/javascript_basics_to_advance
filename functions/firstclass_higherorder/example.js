function greet (name){
    return "hello "+name;
}
const mygreet=greet;
console.log(mygreet("prashant"))

// 2. Storing functions in data structures
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

const operations = [add,subtract,multiply];
const result = operations[0](5,3);
console.log(result)

//function as a arguments 

function applyoperation(func, x,y){
    return func(x,y);
}
console.log(applyoperation(add,2,3))