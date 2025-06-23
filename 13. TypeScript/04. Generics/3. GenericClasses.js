"use strict";
class Box {
    constructor(initialContent) {
        this.content = initialContent;
    }
    getContent() {
        return this.content;
    }
    setContent(newContent) {
        this.content = newContent;
    }
}
const stringBox = new Box("Aadidev");
console.log(stringBox);
console.log(stringBox.getContent());
stringBox.setContent("New content");
console.log(stringBox.getContent());
const numberBox = new Box(42);
console.log(numberBox.getContent());
numberBox.setContent(99);
console.log(numberBox.getContent());
