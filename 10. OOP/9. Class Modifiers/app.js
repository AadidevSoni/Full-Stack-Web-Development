function MyClass(public,private,protected) {
  //Public field
  this.public = public;
  
  //Private field (closure)
  const _private = private;

  //Protected
  const _protected = protected;

  //Public method
  this.publicMethod = function() {
    return `Public field: ${this.public}`;
  }

  //Private method
  function _privateMethod() {
    return `Private field: ${_private}`
  }

  //Protected Method
  function _protectedMethod() {
    return `Protected field: ${_protected}`;
  }

  //Method to access protected method
  this.accessProtectedMethod = function() {
    return _protectedMethod();
  }
}

const myObject = new MyClass("Public data","Private data","Protected data");
console.log(myObject.public);
console.log(myObject.publicMethod());
console.log(myObject.accessProtectedMethod());

// These lines will cause errors since they access private and protected members directly.
// console.log(myObject.privateField); // Error: privateField is not defined
// console.log(myObject._privateMethod()); // Error: _privateMethod is not a function
// console.log(myObject.protectedField); // Error: protectedField is not defined
// console.log(myObject._protectedMethod()); // Error: _protectedMethod is not a function
