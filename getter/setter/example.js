class product {
     __productname;
     get productName(){
        return this.__productname
     }
     set productName(name){
        if(product.productName!=name){
            this.__productname=name
        }else{
            conrsole.log("previous name is same as new setter name ")
        }
     }
}
const obj= new product();
obj.productName="samsung";
console.log(obj.productName)
obj.productName="samsung"
