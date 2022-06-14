type AnimalType = { name: string; age: number };

let animal: AnimalType = { name: "원숭이", age: 12 };

type testType = { readonly name?: string };

const readOnlyObj: testType = {
  name: "우석",
};

type PositionX = { x: number };
type PositionY = { x: number; y: number };
type NewType = PositionX & PositionY;

const position: NewType = { x: 10, y: 10 };

type ObjData = { color?: string; size: number; readonly position: number[] };

let testVar: ObjData = {
  size: 123,
  position: [1, 2, 3],
};

type MyType = { name: string; phone: number; email?: string };
type AdultType = MyType & { adult: boolean };

let joinInfo: AdultType = {
  name: "kim",
  adult: false,
  phone: 1234,
};
