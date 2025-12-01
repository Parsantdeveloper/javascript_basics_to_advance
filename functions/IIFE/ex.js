
// (function displayName(name){
//  console.log("hey there ,"+name);  normal function
// })("john")

// ((name)=>{
// console.log("hey there ,"+name); IIFE for arrow functions
// })("john")

(async()=>{
    let res =await fetch("https://fakestoreapi.com/products");
    const data=await res.json();
    console.log(data)
})()