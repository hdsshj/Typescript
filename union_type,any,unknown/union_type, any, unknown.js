// 타입을 2개 이상 합친 새로운 타입 (Union Type)
var member = 1;
var members = [1, "2", 3];
var object = { a: 1 };
// 간단한 연산도 타입이 맞아야 한다.
// string + 1 (허용)
// number + 1 (허용)
// string | number + 1 (허용 안됨)
// number type, string type이 아닌 'number | string' 이라는 새로운 타입이기 떄문
var var1;
var var2;
var var3;
var1 + 1;
var2 + 1;
// var3 + 1 은 에러 검출
// 타입실드 해제 문법
// 일반 js 변수처럼 사용
var nameAny;
nameAny = 123;
// any와 유사하지만 타입실드를 해제하지 않음
var nameUnknown;
nameUnknown = 123;
// nameAny는 에러 검출 안됨
// nameUnknown은 에러 검출 됨
var newVar = nameAny;
