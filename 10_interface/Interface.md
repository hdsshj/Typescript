## Interface

- object 자료형의 타입을 보다 편리하게 지정 가능
- type alise와 용도와 기능이 똑같음

```ts
interface SquareType {
  color: string;
  width: number;
}

let square: SquareType = { color: "red", width: 100 };
```

- extends가 가능

```ts
// interface extends
interface Animal {
  name: string;
}

interface Cat extends Animal {
  legs: number;
}

// type alias extends
type Animal = {
  name: string;
};

type Cat = Animal & { legs: number };
```

<br>

## 차이점

- interface는 중복선언을 허용해주며 extends 한 것과 동일하게 동작함
- type은 중복선언이 불가능
- type 선언을 자주 쓰는 외부 라이브러리 이용시 type 선언을 override 하기 편함

```ts
// interface 중복 선언
// Animal = {name: string, legs: number}
interface Animal {
  name: string;
}

interface Animal {
  legs: number;
}

// type 중복 선언
// 에러 발생함
type Animal = {
  name: string;
};

type Animal = {
  legs: number;
};
```
