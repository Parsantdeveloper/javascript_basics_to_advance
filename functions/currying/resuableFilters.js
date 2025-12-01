// const filterBy=(key)=>value=>arr=>arr.filter((data)=>data[key]==value);

function filterBy(key){
    return function(value){
     return function(arr){
        return arr.filter((data)=>data[key]==value)
     }
    }
}
const key=filterBy("name");
const filterbyNepal=key("John");

const users = [
  { name: "Prashant", country: "nepal" },
  { name: "John", country: "USA" },
];
console.log(filterbyNepal(users))