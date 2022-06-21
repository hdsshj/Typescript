type FuncType = (a: string) => number;

const newFunc: FuncType = (a) => {
  return 10;
};

type UserInfoType = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let userInfo: UserInfoType = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};

userInfo.plusOne(1);
userInfo.changeName();

type CutZeroFuncType = (a: string) => string;
type RemoveDashFuncType = (a: string) => number;
type TestCallBackType = (
  phoneNum: string,
  func1: CutZeroFuncType,
  func2: RemoveDashFuncType
) => number;

const cutZero: CutZeroFuncType = (a) => {
  if (a.charAt(0) === "0") {
    return a.substring(1, a.length);
  } else {
    return a;
  }
};

const removeDash: RemoveDashFuncType = (a) => {
  return Number(a.replace(/-/g, ""));
};

const testCallBack: TestCallBackType = (phoneNum, func1, func2) => {
  return func2(func1(phoneNum));
};

console.log(cutZero("0이거"));
console.log(removeDash("123-213-123"));
console.log(testCallBack("010-7668-1735", cutZero, removeDash));
