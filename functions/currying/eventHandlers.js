const handleEvent=(event)=>element=>console.log("event is "+event+" element is "+element);
const handleClick=handleEvent("click");
handleClick("button")