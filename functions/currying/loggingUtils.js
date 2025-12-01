const log=(level)=>msg=> console.log(`[${level}] ${msg}`);
const info = log("INFO");
const error = log("ERROR");

info("Server started");
error("Database connection failed");

const compose = (f,g)=>x=>f(g(x));
const double=(x)=>x*2;
const sum5=(x)=>x+5;
const doubleThenSum5=compose(sum5,double);
console.log(doubleThenSum5(20));