// async function loadData(){
//     try {
//         const [p1,p2,p3]=await Promise.all([fetch("https://fakestoreapi.com/products/1"),
//       fetch("https://fakestoreapi.com/products/2"),
//       fetch("https://fakestoreapi.com/products/3")]);
//       const data=await Promise.all([p1.json(),p2.json(),p3.json()]);
//       console.log(data)
//     } catch (error) {
//         console.error(error)
//     }
// }
// loadData()

(async function loadData(){
    try {
        const [p1,p2,p3]=await Promise.all([fetch("https://fakestoreapi.com/products/1"),
      fetch("https://fakestoreapi.com/products/2"),
      fetch("https://fakestoreapi.com/products/3")]);
      const data=await Promise.allSettledce([p1.json(),p2.json(),p3.json()]);
      console.log(data)
    } catch (error) {
        console.error(error)
    }
})()
