let literal: "aaa" | "bbb";

literal = "aaa";

const rsp = (target: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] => {
  const array = [target];
  return array;
};

console.log(rsp("가위"));

var data = {
  name: "kim",
} as const;

function myFunc(a: "kim") {}

myFunc(data.name);
