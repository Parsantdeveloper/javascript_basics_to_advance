
// function example(){
//    this.test=true
// };

// const obj=new example()
// console.log(obj.test);
//=================================================

// 🧬 4. Prototype Inheritance with new

// You can define shared methods using the constructor’s prototype:

// function animal(name){
//     this.name=name;
// }
// animal.prototype.eat=function(){console.log(this.name+"is eating")};

// const dog=new animal("dog")
// dog.eat()

function Animal(name){
this.name=name;
}
Animal.prototype.eat=function(){
    console.log(this.name+"is eating..")
}

function Cat(name,breed){
    Animal.call(this,name);
    this.breed=breed;
}

Cat.prototype=Object.create(Animal.prototype);
Cat.prototype.constructor = Cat; // ✅
console.log(Cat.prototype.constructor===Animal.prototype)
Cat.prototype.meow=function(){
    console.log(this.name+" is mewing")
    console.log(this.breed+" is mewing")
}

const cat=new Cat("haggu","german shepered");
// cat.eat()
cat.meow()