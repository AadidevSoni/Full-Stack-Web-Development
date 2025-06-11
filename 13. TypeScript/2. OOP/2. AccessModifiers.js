"use strict";
class Person3 {
    constructor(first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }
    getName() {
        return this.last;
    }
}
let p1 = new Person3("Aadi", "Dev", 18);
console.log(p1.first);
console.log(p1.getName());
class aadi extends Person3 {
    constructor(first, last, age) {
        super(first, last, age);
    }
}
const aadidev = new Person3("Aadidev", "Soni", 18);
console.log(aadidev);
