## Literal Types

- **특정 글자나 숫자만 가질 수 있게 제한**을 두는 타입을 **Literal Type**이라고 함

```ts
let literalData: "left" | "right";
literalData = "left";

function literalFunc(a: "hello"): 1 | 0 | -1 {
  return 1;
}
```
