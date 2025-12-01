

const fetchData=(url)=>async(endpoint)=>{
    const responce = await fetch(`${url}${endpoint}`);
    const data= await responce.json();
    console.log(data)
    return data;

   }

  const url ="https://fakestoreapi.com/"
const api= fetchData(url)
await api("products");
await api("users")
