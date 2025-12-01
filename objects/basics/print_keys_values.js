//Create an object person with properties: name, age, and city. Print all keys and values.

const obj = {
    name:"prashant bhusal",
    age:18 , 
    city:"goruisinge"
}

obj["country"]='nepali ho ni ';
obj.country="nepal";
 
Object.assign(obj,{country:"usa"});
delete obj.country;

console.log(obj)