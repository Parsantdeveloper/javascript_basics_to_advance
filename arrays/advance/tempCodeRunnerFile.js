   .reduce((accum , current)=>{
     if(current=="a"||"e"||"i"||"o"||"u"){
    accum.push(current);
    }
    return accum;
  },[]); 