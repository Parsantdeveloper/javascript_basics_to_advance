function calculator(){
     const add =(a,b)=>a+b
     const subtract =(a,b)=>a-b
     const multiply =(a,b)=>a*b
     const divide=(a,b)=>{
        if(b==0)throw new Error(`0 can't divide`);
        return a/b; 
     }
     const operations ={
       '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide
     }
   
    function calculate (symbol, a,b){
        let calc_function=operations[symbol];
          if (!calc_function) {
            throw new Error(`Unknown operation: ${symbol}`);
        }
        const result = calc_function(a,b)
        return result;
    }
   return calculate
}
const calc=calculator()
console.log(calc("+",1,2));