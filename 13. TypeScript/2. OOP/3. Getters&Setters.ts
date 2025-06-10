class myClass {
  private _myProperty: number = 0;

  get myProperty():number {
    return this._myProperty;
  }

  set myProperty(value:number) {
    this._myProperty = value;
  }
}

const myInstance = new myClass();
console.log("Value: " + myInstance.myProperty);

myInstance.myProperty = 100;
console.log("Value: " + myInstance.myProperty);