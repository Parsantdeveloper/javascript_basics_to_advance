let anime ={
    title:"aot"
}
let anime2={
    title:"solo levelling",
    print(...age){
        console.log(`hey there ${this.title} fan !! you are ${age} y/o`)
    }
}
Object.prototype.myapply=function(obj,...args){
    obj.method=this;
     obj.method(...args)
}
 anime2.print.myapply(anime,[16,18])
 /// back in 5 mins 