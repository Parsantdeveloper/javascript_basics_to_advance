// const obj={};
// console.log(Object.getPrototypeOf(obj)===Object.prototype)


// {
//   propertyName: {
//     value: <something>,
//     writable: true/false,
//     enumerable: true/false,
//     configurable: true/false
//   }
// }

const animal={
   eat:true,
   walk(){
    console.log("walking....")
   }
}


const cat=Object.create(animal,{
  
  meow:{
    value:true
  },
    jump:{
        value:()=>console.log("jumpingg...")
    }
  
})
console.log(cat.meow);
cat.walk();
cat.jump();
// console.log(animal)
// const dog=Object.create(animal);
// console.log(dog);
// dog.walk()