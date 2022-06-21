interface Square {
  color: string;
  width: number;
}

let nemo = { color: "red", width: 100 };

interface Inter1 {
  name: string;
}

interface Inter2 extends Inter1 {
  age: number;
}

type Animal = { name: string };
type Cat = { age: number } & Animal;

let interface1: Inter1 = { name: "kim" };
let interface2: Inter2 = { name: "park", age: 12 };

interface UnitType {
  brand: string;
  serialNumber: number;
  model: string[];
}

let unit: UnitType = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface BucketType {
  product: string;
  price: number;
}

interface NewBucketType extends BucketType {
  card?: boolean;
}

let bucket: NewBucketType[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
  { product: "삼다수", price: 800, card: true },
];

interface FuncDockType {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let funcDock: FuncDockType = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
};

funcDock.minus(2, 1);
