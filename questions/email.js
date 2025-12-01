// // there is a gmail , if there is no @ in gmail then that gmail and after that get the gmail domain name . 
// example :  parshantbhusal099@gmail.com ---> gmail.com

let gmail =prompt("write a gmail!!")

  let domain = ""
   if(!gmail.includes("@")){
    alert("this gmail is not valid");
   }
   domain=gmail.slice(gmail.indexOf("@"),gmail.length)
  alert(domain)