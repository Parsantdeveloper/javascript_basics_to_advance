//Capitalize the first letter of each word

let names = ['john', 'mary', 'peter'];
// ➜ ['John', 'Mary', 'Peter']

 names=names.map((data)=>{
     return `${data[0].toUpperCase()}${data.slice(1)}`;
 })
 console.log(names)

//  console.log("john".slice(0,1))