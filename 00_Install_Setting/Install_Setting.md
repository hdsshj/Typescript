# install setting

<br>

> ## 타입스크립트를 사용하는 이유
>
> <br>

자바스크립트는 타입에 관대하다.<br>
`5 - '3'` 이렇게 숫자와 문자를 연산해도 알아서 타입을 바꿔주기 때문에<br>
`parseInt([1,2,3])` 숫자로 바꿔주는 함수에 뭔가 이상한걸 넣어도 아무런 제지가 없다.<br>
**`자바스크립트는 Dynamic typing 을 지원하는 언어`**<br><br>

그렇지만 타입스크립트는 이런걸 모두 에러로 잡아준다.<br>
`Dynamic typing`은 간단한 기능을 개발할 땐 편리할 수 있지만 프로젝트가 커진다면 type과 관련된 버그들이 많이 발생하기 때문에 이 부분은 오히려 단점이 된다.<br><br>

> ## 일반 HTML, CSS, JS로 웹개발시 타입스크립트 사용

1. **Node.js 최신버전 설치**
2. **typescript 컴파일러 설치**

```
npm install -g typescript
```

3. HTML 파일 등에서 타입스크립트로 작성한 코드를 사용하려면 변환 된 .js 파일을 사용
   <br><br>

> ## React에서 타입스크립트 사용

1. 이미 존재하는 React 프로젝트에 적용 시

```js
// npm install
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

// yarn install
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

2. 새로 만드는 React 프로젝트에 적용 시

```
npx create-react-app my-app --template typescript
```
