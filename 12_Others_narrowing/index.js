const animalFunc = (animal) => {
    if ("swim" in animal) {
        animal.swim;
    }
};
const check = (target) => {
    if (target instanceof Array) {
        return "Array";
    }
    else {
        return "Object";
    }
};
console.log(check(["si"]));
