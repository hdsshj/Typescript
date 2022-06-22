type Fish = { swim: string };
type Bird = { fly: string };

const animalFunc = (animal: Fish | Bird) => {
  if ("swim" in animal) {
    animal.swim;
  }
};

type ObjType = { name: string };
type ArrayType = string[];

const check = (target: ObjType | ArrayType) => {
  if (target instanceof Array) {
    return "Array";
  } else {
    return "Object";
  }
};

console.log(check(["si"]));

type CarType = {
  wheel: "4개";
  color: string;
};

type BikeType = {
  wheel: "2개";
  color: string;
};
