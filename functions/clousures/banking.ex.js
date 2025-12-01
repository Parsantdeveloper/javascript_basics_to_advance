let initialamount = 500;

function bank(initialamount){
    let balance = initialamount;
     return{
      deposit(amount){
      return  balance+=amount;
      },
      withdraw(amount){
       return balance>=amount?balance-=amount:console.log("insufficient balance")
     },
     getBalance(){
      return balance;
     }
     }
}
const reader=bank(initialamount);
console.log(reader.getBalance())
console.log(reader.deposit(100))
console.log(reader.withdraw(400))