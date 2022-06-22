const genericFunc = <Generic>(x: Generic[]) => {
  return x[0];
};

let a = genericFunc<number>([1, 2]);

console.log(a + 1);

interface LengthCheck {
  length: number;
}

const extendsTest = <Type extends LengthCheck>(x: Type) => {
  return x.length;
};
