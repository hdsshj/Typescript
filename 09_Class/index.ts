function Machine() {
  this.q = "strike";
  this.w = "snowball";
}

Machine.prototype.name = "kim";

const nunu = new Machine();

console.log(nunu);
console.log(nunu.name);

class Person {
  name: string;

  constructor(a: string) {
    this.name = a;
  }

  print(a: string) {
    console.log("실행 되었음" + a);
  }
}

let person1 = new Person("kim");
let person2 = new Person("Park");
person1.print("a");

class Car {
  model: string;
  price: number;

  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  tax(): number {
    return this.price * 0.1;
  }
}

let car1 = new Car("소나타", 3000);

console.log(car1);
console.log(car1.tax());

class Word {
  num: number[] = [];
  str: string[] = [];

  constructor(...char: (string | number)[]) {
    char.forEach((el) => {
      if (typeof el === "number") {
        console.log(el);
        this.num.push(el);
      } else {
        this.str.push(el);
      }
    });
  }
}

let obj = new Word("kim", 1, 2, 3, "park");

console.log(obj.num);
console.log(obj.str);
console.log(obj);
