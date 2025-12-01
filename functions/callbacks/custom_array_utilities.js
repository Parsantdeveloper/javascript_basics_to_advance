
const ArrayUtils={
    map:function(arr,callback){
        const result = [];
        for(let i=0;i<arr.length;i++){
            result.push(callback(arr[i]),i,arr);
        }
        return result
    },
    filter:function (arr,callback){
        const result =[];
        for(let i = 0 ; i<arr.length;i++){
          if(callback(arr[i])){
            result.push(arr[i])
          }
        }
        return result
    },
    reduce:function (arr, callback){
        
    }
}

const numbers = [1, 2, 3, 4, 5];

// Using custom map
// const doubled = ArrayUtils.map(numbers, x => x * 2);
// console.log('Doubled:', doubled); // [2, 4, 6, 8, 10]
const filter=ArrayUtils.filter(numbers,x=>x>3);
console.log(filter)
