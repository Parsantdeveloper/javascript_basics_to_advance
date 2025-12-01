// const person={
//     name:"johnathan wick",
//     age:24,
//     address:{
//         name:"ktm"
//     }
// }
// const shallowCopy = { ...person }; // or Object.assign({}, person)
// console.log(shallowCopy)
// shallowCopy.address.name="Monkey D Luffy";
// console.log(person.address.name)

// // this only works for nonpreemptive , or immutable and also 

const person = {
  name: "John",
  address: {
    city: "Kathmandu",
    country: "Nepal"
  }
};

const shallowCopy = { ...person }; // or Object.assign({}, person)

shallowCopy.name = "Doe";
shallowCopy.address.city = "Pokhara";

console.log(person.address.city); // ❗ Pokhara (also changed!)
console.log(person.name) //john because name is string and it is preemtive , non-mutable , pass by value , stack memory
