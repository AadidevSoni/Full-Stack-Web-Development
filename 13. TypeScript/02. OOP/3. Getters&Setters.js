"use strict";
class myClass {
    constructor() {
        this._myProperty = 0;
    }
    get myProperty() {
        return this._myProperty;
    }
    set myProperty(value) {
        this._myProperty = value;
    }
}
const myInstance = new myClass();
console.log("Value: " + myInstance.myProperty);
myInstance.myProperty = 100;
console.log("Value: " + myInstance.myProperty);
