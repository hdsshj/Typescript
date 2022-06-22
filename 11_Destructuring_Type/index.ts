let { student, stAge } = { student: true, stAge: 20 };

interface printOnjType {
  student: boolean;
  stAge: number;
}

const printObj = ({ student, stAge }: printOnjType) => {
  console.log(student, stAge);
};

printObj({ student, stAge });

const maxNumber = (...num: number[]) => {
  let maxNum = 0;
  num.forEach((el) => {
    if (maxNum < el) {
      maxNum = el;
    }
  });

  return maxNum;
};

console.log(maxNumber(1, 2, 3));

interface DestType {
  user: string;
  comment: number[];
  admin: boolean;
}

const destructureFunc = ({ user, comment, admin }: DestType): void => {
  console.log(user, comment, admin);
};

destructureFunc({ user: "kim", comment: [3, 5, 4], admin: false });

type DestArrType = (number | string | boolean)[];

const destArrayFunc = ([a, b, c]: DestArrType) => {
  console.log(a, b, c);
};

destArrayFunc([40, "wine", false]);
