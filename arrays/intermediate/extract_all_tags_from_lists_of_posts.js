// extract all tags from lists of posts 

let posts = [
  { title: 'JS', tags: ['js', 'frontend'] },
  { title: 'Node', tags: ['js', 'backend'] },
  { title: 'React', tags: ['frontend', 'ui'] }
];
// Output ➜ ['js', 'frontend', 'backend', 'ui']

//approach 1 
 // first using reduce we can get output as ['js', 'frontend','js', 'backend','frontend', 'ui']
  // using reduce and getting Output ➜ ['js', 'frontend', 'backend', 'ui']

  const tags = [...new Set(posts.flatMap(post => post.tags))];
  console.log(tags)

// posts=posts.reduce((accum,current)=>{
//    current.tags.forEach((data)=>{
//     if(!accum.includes(data)){
//         accum.push(data)
//     }
//    });
//    return accum ;
// },[])
// console.log(posts)