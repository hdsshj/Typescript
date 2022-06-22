let { student, stAge } = { student: true, stAge: 20 };
const printObj = ({ student, stAge }) => {
    console.log(student, stAge);
};
printObj({ student, stAge });
const maxNumber = (...num) => {
    let maxNum = 0;
    num.forEach((el) => {
        if (maxNum < el) {
            maxNum = el;
        }
    });
    return maxNum;
};
console.log(maxNumber(1, 2, 3));
const destructureFunc = ({ user, comment, admin }) => {
    console.log(user, comment, admin);
};
destructureFunc({ user: "kim", comment: [3, 5, 4], admin: false });
const destArrayFunc = ([a, b, c]) => {
    console.log(a, b, c);
};
destArrayFunc([40, "wine", false]);
