let anime ={
    title:"aot"
}
let anime2={
    title:"solo levelling",
    print(age){
        console.log(`hey there ${this.title} fan !! you are ${age} y/o`)
    }
}
Object.prototype.mycall=function(obj,...args){
    obj.method=this;
     obj.method(...args)
}
 anime2.print.mycall(anime,16)