
const url="https://fakestoreapi.com";

const fetchData=(baseUrl)=> async (endpoint)=>{
   const responce= await  fetch(`${baseUrl}/${endpoint}`);
   const data=responce.json();
   return data;
}
const api = fetchData(url)
const products = await api("/products");
  console.log(products)