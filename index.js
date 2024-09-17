const Logevent =require('./Logevent/Logevent')
const EventEmitter =require('events')

class myEvent extends EventEmitter{}
const obj=new myEvent();
obj.on('log',async(msg)=>{
    console.log("event is triggered .....")
    await Logevent(msg);
})
obj.emit('log','hello makkale');
