import EventEmitter from "events";

//Creating instance
const cusomEmitter = new EventEmitter();

//1. on - listen/register for an event
//2. once - listen/register but only once
//3. emit - call an event

cusomEmitter.on('response',(name,id) => {
  console.log("User: " + name + " id: " + id);
});

cusomEmitter.emit('response',"Aadi",18);
cusomEmitter.emit('response',"Aadidev",19);

//Runs only once
cusomEmitter.once('responses',(name,id) => {
  console.log("User: " + name + " id: " + id);
});

cusomEmitter.emit('responses',"Aadi",18);
cusomEmitter.emit('responses',"Aadidev",19);
