function EventEmitter(){

this.arr = [];
}

EventEmitter.prototype.eventCall= function(eventName){
    if(typeof this.arr[eventName]=='undefined'){
    this.arr[eventName]=[];}
};

EventEmitter.prototype.on=function(eventName,callBack){
    this.eventCall(eventName);

    this.arr[eventName].push(callBack);
};

EventEmitter.prototype.emit= function(eventName,data){
    this.eventCall(eventName);

    for(let i=0;i<arr[eventName].length;i++){
        y=this.arr[eventName][i];
        y({"name": eventName,"data": data});
    }

};




