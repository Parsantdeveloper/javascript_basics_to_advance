// find users with gmail address

let users = ['john@gmail.com', 'mary@yahoo.com', 'bob@gmail.com'];
// Output ➜ ['john@gmail.com', 'bob@gmail.com']

users=users.flatMap((data)=>data.includes("gmail")?[data]:[]);
console.log(users)