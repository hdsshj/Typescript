namespace Animal {
  export type Dog = string;
}

interface Dog {
  name: string;
}

let dog1: Animal.Dog = "bark";
let dog2: Dog = { name: "paw" };
