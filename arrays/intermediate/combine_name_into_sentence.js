const names = ['Alice', 'Bob', 'Charlie'];
// Output ➜ "Alice, Bob and Charlie"

 console.log(
    names.reduce((accum,data)=>{
        return accum+" "+data
    })

)