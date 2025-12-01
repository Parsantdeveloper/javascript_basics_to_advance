
// function greet (name){
//     return function display(){
//         console.log(`hello ${name}`)}
// }
// const greeting =greet("niraj");
// greeting()

// function greet(name){
//     function greeting(){
//         return `hey there , ${name} !`
//     };
//     return function display(){
//         console.log(greeting());
//     }
// }
//  const demo=greet("niraj")
//  demo()

// taking function as an argument 

function greet(name){
return `hey there ${name}`
}
function greeting(callback,name,message){
    console.log(callback(name),message)
}
const display_name="Niraj"
greeting(greet,display_name,
    " welcome to my live_stream!!!"
)