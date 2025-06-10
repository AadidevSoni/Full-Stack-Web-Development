class Person3 {
  public first: string;
  private last: string;
  protected age: number;
  constructor(first: string,last: string,age:number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  getName():string {
    return this.last;
  }
}

let p1 = new Person3("Aadi","Dev",18);
console.log(p1.first);
console.log(p1.getName());

class aadi extends Person3{
  constructor(first: string,last: string,age:number){
    super(first,last,age);
  }
}

const aadidev = new Person3("Aadidev","Soni",18);
console.log(aadidev);
