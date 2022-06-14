// 숫자, 문자가 섞여있는 array를 숫자 타입으로 클리닝하는 함수

const array = [1, 2, 3, "4", "5"];

const arrayConvertor = (target: (string | number)[]): number[] => {
  let newArray: number[] = [];

  target.forEach((el) => {
    if (typeof el === "number") {
      newArray.push(el);
    } else {
      newArray.push(Number(el));
    }
  });

  return newArray;
};

console.log(arrayConvertor(array));

// object 자료를 넣으면 마지막 요소를 return 하는 함수
// object는 { subject: string | string[] } 의 타입을 가짐

let teacherA = { subject: "math" };
let teacherB = { subject: ["science", "english"] };
let teacherC = { subject: ["math", "science", "korean"] };
let teacherD = { adcdefg: ["math", "science", "korean"] };

const getLastElement = (target: { subject: string | string[] }): string => {
  if (Array.isArray(target.subject)) {
    return target.subject[target.subject.length - 1];
  } else {
    return target.subject;
  }
};

console.log(getLastElement(teacherC));
