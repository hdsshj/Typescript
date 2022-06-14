## Type Alias

타입을 변수처럼 만들어서 사용 가능

```ts
let Animal: string | number | string[] | undefined;
```

- 위와 같이 길고 복잡하게 타입을 나열하는 경우
- 재사용이 필요한 경우
- 관습적으로 대문자로 시작하며 일반 자바스크립트 변수와 차별점을 둘 필요가 있음

<br>

## Read Only

- const로 선언 한 변수는 재할당시 에러 발생
- 하지만 object 자료를 const에 집어넣어도 object 내부는 변경 가능
- object 속성을 바뀌지 않게 하려면 readonly 키워드를 사용
- readonly 는 컴파일시 에러를 내는 것일 뿐 js파일에서는 변환 됨

```ts
type testType = { readonly name?: string };

const readOnlyObj: testType = {
  name: "우석",
};
```

<br>

## Optional Elements

- 물음표 연산자를 추가
- undefined 타입도 가질 수 있다는 뜻

```ts
type SquareType = {
  color?: string;
  width: number;
};

let square: SquareType = {
  width: 100,
};
```

<br>

## Type Extend

```ts
type Name = string;
type Age = number;
type NewOne = Name | Age;

type PositionX = { x: number };
type PositionY = { x: number; y: number };
type NewType = PositionX & PositionY;

type MyType = { name: string; phone: number; email?: string };
type AdultType = MyType & { adult: boolean };
```
