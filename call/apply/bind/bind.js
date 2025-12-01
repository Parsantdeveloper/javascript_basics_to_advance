let anime ={
    title:'one piece'
}

let anime2={
    title:"naruto",
    print(age){
        console.log(`hey there ${this.title} fan !! you are ${age} y/o`)
    }
}
Object.prototype.mybind = function(obj,...args) // anime{}
{
  //anime{}     //anime2.print
  obj.method = this;
  // let anime ={
//     title:'one piece',
//     method:anime2.print
// }
  return function() { obj.method(...args) }
}

let reader =anime2.print.mybind(anime,14)
reader()
// //  let reader=anime2.print.bind(anime)
// //  reader()a

