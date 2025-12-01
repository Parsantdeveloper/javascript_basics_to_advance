

function Counter(){
    const privateCounter=0;

    this. status=function(){
     console.log(privateCounter)
    }
    this. increment=function(){
            this.privateCounter++;
    },
    this.decrement=function(){
           this.privateCounter--;
     }
    
};
const chounter = new Counter();
chounter.status();
chounter.increment();
chounter.status();
chounter.decrement();
chounter.status();
