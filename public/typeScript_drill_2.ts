// 타입스크립트 타입 추론 / 단언 / 가드

// 1. 추론
// 타입스크립트는 코드에서 변수를 선언하거나, 할당 할때 추론이 일어납니다.

// let x = 3; // 선언함으로 x는 number라는 추론 일어남

// 또는 함수를 선언하고, 파라미터에 기본값을 넣으면 추론 일어납니다.

// // 파라미터에 기본값을 선언함으로 b는 number라는 추론이 일어남
// function test(b = 10) {
//   return b;
// }

// 2. 타입 단언 (type assertion)
// 타입스크립트에서 추론하는 값보다 개발자가 해당 변수의 타입을 더 잘 알고있을때, 변수에 원하는 타입을 강제로 부여합니다.

// let a;
// a = "20";
// a = 10;
// let b = a;
// // ts에서 a는 any로 추론하기 때문에 b도 any라고 ts는 추론한다.
// // 그러나 개발자는 b가 10
// // 즉, number임을 알기 때문에 b에 number를 강제로 assertion 한다

// let b = a as string;

// 3. 타입 가드 (type guard)
// 함수의 파라미터로 유니온 타입이 지정되는 경우 타입이 2개 이상임으로 공통되는 속성만 사용이 가능합니다. 이럴 경우 각 타입을 분기 처리하여 타입별로 로직을 분리 하기 위한 작업입니다.

// interface Dev {
//   name: string;
//   skill: string;
// }
// interface Person {
//   name: string;
//   age: number;
// }

// function introduce(): Dev | Person {
//   return { name: "d", age: 33, skill: "c" };
// }
// const tony = introduce(); // Dev | Person 으로 공통된 속성만 사용가능. 즉, tony.skill 불가

// // skill을 빼고 싶다면? -> type assertion으로 사용 가능
// if ((tony as Dev).skill) {
//   console.log((tony as Dev).skill);
// } else if ((tony as Person).age) {
//   console.log((tony as Person).age);
// }
// // 너무 assertion을 많이 씀으로 타입 가드 함수를 만든다.

// // 타입 가드 정의
// // target is Dev -> 넘겨 받은 파라미터가 해당 타입인지를 확인
// function isDev(target: Dev | Person): target is Dev {
//   // skill이 있다면 Dev이다
//   return (target as Dev).skill !== undefined;
// }
// if (isDev(tony)) {
//   // name, skill 사용 가능
//   console.log(tony.skill);
// } else {
//   // name, age 사용 가능
//   console.log(tony.age);
// }
