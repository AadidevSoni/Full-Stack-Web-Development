class Box<T> {
  private content:T;

  constructor(initialContent:T) {
    this.content = initialContent;
  }
  getContent():T {
    return this.content;
  }

  setContent(newContent:T):void {
    this.content = newContent;
  }
}

const stringBox = new Box<string>("Aadidev");
console.log(stringBox);
console.log(stringBox.getContent()); 
stringBox.setContent("New content");
console.log(stringBox.getContent()); 

const numberBox = new Box<number>(42);
console.log(numberBox.getContent());
numberBox.setContent(99);
console.log(numberBox.getContent()); 