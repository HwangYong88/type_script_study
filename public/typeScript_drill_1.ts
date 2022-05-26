// 1. TypeScript 추가
// 기존 프로젝트에 TypeScript를 추가합니다.
// npm install --save typescript @types/node @types/react @types/react-dom @types/jest

// 2. tsconfig.json 추가
// tsconfig.json은 타입스크립트로 만들어진 프로젝트에 대한 환경 설정입니다. 아래 커멘드로 기본적인 tsconfig.json를 만듭니다.
// npx tsc --init
// --> tsconfig.json이 루트 디렉토리에 만들어짐

// 3. package.json에 @types/xxx 추가
// 이거는 저절로 됐다,

// 4. jsx to tsx : 리덕스, 리덕스 사가, 등등 라이브러리 별로 바꿔줘야함
// 이제 파일 하나씩 jsx 또는 js를 tsx로 바꾸는 작업을 합니다.
// npx tsc --init에 의해 프로젝트에 자바스크립트와 타입스크립트가
// 공존할 수 있도록 미리 세팅을 하여 ("allowJs": true),
// 하나씩 바꾸면서 기존 프로젝트를 유지할 수 있습니다.

// 5. 잘안될때 : 글로벌로 설치해 버리기
// npm install -g ts-node
// npm install -g typescript
