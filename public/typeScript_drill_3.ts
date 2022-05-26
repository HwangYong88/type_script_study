// 타입스크립트 기본 타입
interface Dev {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

function introduce(): Dev | Person {
  return { name: "dragon", age: 33, skill: "punch" };
}
const tony = introduce();

// console.log(tony.skill); // 이렇게 쓰면안됨 Dev와Peson두개가 공통된 속성망 사용가능

// 1. 타입 단언 : (tony as Dev) 개발자가 해당 변수를 타입을 강제부여한다. ------------------------------
if ((tony as Dev).skill) {
  console.log("tony 는 Dev");
} else {
  console.log("tony 는 Person");
}

// 2. 타입 가드 (type guard) --------------------------------------------------------------------
// 함수의 파라미터로 유니온 타입이 지정되는 경우 타입이 2개 이상임으로 공통되는 속성만 사용이 가능.
// 이럴 경우 각 타입을 분기 처리하여 타입별로 로직을 분리 하기 위한 작업
// 타입 가드 정의 : (target is Dev) -> 넘겨 받은 파라미터가 해당 타입인지를 확인
function isDev(target: Dev | Person): target is Dev {
  // skill이 있다면 Dev이다
  return (target as Dev).skill !== undefined;
}
if (isDev(tony)) {
  // name, skill 사용 가능
  console.log(tony.skill);
} else {
  // name, age 사용 가능
  console.log(tony.age);
}

// 타입 스크립트 일단 중지
