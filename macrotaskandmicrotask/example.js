// // 

// // setTimeout(()=>{
// //   console.log("microtask1");
// //   Promise.resolve().then(()=>console.log("micro task 1"))
// // },0)
// // Promise.resolve().then(()=>console.log("micro task 2"))

// // async await 

// async function run(){
//     console.log("hey first");
//     await null; 
//     console.log(" hello third");
// }
// run()
// console.log("hey second")

// queueMicrotask()

console.log(1)
 queueMicrotask(()=> console.log(2))
console.log(3)