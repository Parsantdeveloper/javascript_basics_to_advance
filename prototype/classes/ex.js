class Animal{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(this.name+" is eating ..")
    }
}
class Cat extends Animal{
    constructor(name, breed){
        super(name);
        this.breed=breed
    }
    meow(){
        console.log(this.breed+" is meowing")
    }
}

const obj= new Cat("cat","whitecatpussy");
obj.eat()
obj.meow()