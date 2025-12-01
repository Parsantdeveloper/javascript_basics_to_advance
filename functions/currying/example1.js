// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3)) instead of doing this

// function curriedAdd(a){
//     console.log(a+"first")
//     return function add(b){
//         console.log(b+"second")
//         return a+b;
//     }
// }
// console.log(curriedAdd(2)(3))

// function multipy(a){
//     return function(b){
//         return a*b;
//     }
// }
// const double=multipy(2);
// const triple=multipy(3);
// console.log(double(5))
// console.log(triple(10));

// const add=(a)=>b=>c=>a+b+c;
// console.log(add(1)(2)(3))