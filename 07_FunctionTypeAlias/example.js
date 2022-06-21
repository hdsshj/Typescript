const newFunc = (a) => {
    return 10;
};
let userInfo = {
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
const cutZero = (a) => {
    if (a.charAt(0) === "0") {
        return a.substring(1, a.length);
    }
    else {
        return a;
    }
};
const removeDash = (a) => {
    return Number(a.replace(/-/g, ""));
};
const testCallBack = (phoneNum, func1, func2) => {
    return func2(func1(phoneNum));
};
console.log(cutZero("0이거"));
console.log(removeDash("123-213-123"));
console.log(testCallBack("010-7668-1735", cutZero, removeDash));
