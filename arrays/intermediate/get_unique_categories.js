// get unique categories 

let products = [
  {name:'Shirt', category:'Clothing'},
  {name:'Pants', category:'Clothing'},
  {name:'Phone', category:'Electronics'}
];
// Output ➜ ['Clothing', 'Electronics']
 
products=products.reduce((accum,current)=>{
     if(!accum.includes(current.category)){
       accum.push(current.category)
     }
    return accum;
},[])

console.log(products)