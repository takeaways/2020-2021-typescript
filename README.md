# typescript-webgame

# 001

### 1) TypeScript 소개

1. 언어이면서 라이브러리이다.
2. 하위 호환성 과거의 사용했던 코드를 사용해도 문제가 없도록 보장한다
3. VScode vs Webstorm을 사용하는 것을 추천 드립니다. [타입 장점]
4. 타입스크립트의 실행기는?
5. javascript의 슈퍼셋이다.
6. 타입을 얻는 대신 자유로움을 잃는다 음~

### 2) TypeScript와 폴더 구조 셋팅

1. npm i typescript

### 3) tsc 사용해보기

1. npm i -g typescript
2. tsc 파일명.ts
3. tsc 파일명.ts -watch (파일이 변경되면 자동으로 컴파일을 실행해준다.)

### 4) d.ts 파일

1. 타입을 정의하는 파일을 definition
2. "^3.7.4" 의 ^의미는 3.7.4 <= x < 4.0.0 설치 package.json

# 002

### 1) tsconfig.json

1. 컴파일 옵션을 설정해주는 파일
   ```json
   {
   	"compilerOptions": {
   		"noImplicitAny": true,
   		"noImplicitThis": true,
   		"noImplicitReturns": true,
   		"strict": true, //기본 false이기 때문에 true로 변경해주는게 좋다.
   		"lib": ["DOM", "ES2015", "ES2017", "ES2020"],
   		"target": "ES6",
   		"module": "commonJS"
   	},
   	"include": [], //어떤파일을 컴파일 할지
   	"exclude": ["*.js"] //컴파일을 제외할 파일의 목록
   }
   ```

### 2) b?: number 있을지 없을지 모를 때 사용한다.

1. 타입

   ```c
   let num: number[] = [3];
   let str: string;
   //any 아무거나 넣어 버릴 수 있는 상태가 되버린다.

   let arr: (string | number | boolean)[] = [1, '1', true];
   let arr1 = [1, '1', true] as const; //튜플
   let s = 'hell' as const;
   // s = 1;

   str = 'Hello world';
   console.log(str);

   const obj: { name: string; age: number } = {
     name: 'gi',
     age: 29,
   }; // as const 해주면 내부 값을 못 바꾼다.
   obj.name = 'gi2';
   obj.age = 30;

   const obj1: { name: string; age?: number } = {
     name: 'gi',
   };
   ```

2. enum Color {Red, Blue, Green} = 0, 1, 2를 의미하게 된다.
3. ? : (삼항연산자) / ?. 옵셔널 체이닝 (obj?.name) -> name이 있던가 없던가
4. null, undefined, void

   ```c
   function add(a:number, b:number):number{
     return a + b
   }

   function minus(a:number, b:number):void{
     const result = a -b;
   }

   function hoc(a:number,b:number):(c:string)=>number{
     return (c:string): number =>{
       return 3
     }
   }
   ```

5. never const a : [] = []
6. hello as unknown as string 만약 hello가 number 라면

   ```c
   let num: number[] = [3];
   let str: string;
   //any 아무거나 넣어 버릴 수 있는 상태가 되버린다.

   let arr: (string | number | boolean)[] = [1, '1', true];
   let arr1 = [1, '1', true] as const; //튜플
   let s = 'hell' as const;
   // s = 1;

   str = 'Hello world';
   console.log(str);

   const obj: { name: string; age: number } = {
     name: 'gi',
     age: 29,
   }; // as const 해주면 내부 값을 못 바꾼다.
   obj.name = 'gi2';
   obj.age = 30;

   const obj1: { name: string; age?: number } = {
     name: 'gi',
   };

   const ar: [] = 1;

   ```

# 03 인터페이스{} 객체에 많이 사용 vs type = {} 조금 더 넓은 범위

1. 같은 이름의 인터 페이스를 따로 만들 수 있다.
2. extends 를 통한 타입 상속이 가능하다.

   ```c
   type HELLO = string | number;
   type ob = {
       ROCK: string;
       PAPER: string;
   } | string;

   const obj: ob = {
       ROCK: "HELL",
       PAPER: "sd"
   };
   const obj1: ob = "HELLO WORLD";
    interface RSP {
        readonly ROCK: '0',
        readonly SCISSORS: '-142px',
        readonly PAPER: '-284px',
    }
   ```

3. d.ts 문제 해결하기

- undefined or null 이라는 타입이 정의 되어 리턴 값이 되어 있을 떄는 개발자가 값을 보장 한다는 의미로 !(느낌표)를 뒤에 붙여 준다.

4. this와 타입 범위 이해

- this:HTMLButtonElement

# 04 Class, Generic

1. 인터페이스의 확장형이라고 생각 할 수 있다?? 음...
2. strictNullChecks 옵션 null과 undefined를 다른 것으로 본다
3. ?는 언디파인드가 가능하다는 의미를 내포한다.

### 1 제네릭

1. function add<T>(a:T, b:T):T{}
2. 명의 뒤 쪽에 타입으로써 사용할 수 있다.
3. 제네릭 타입 추론
4. 제네릭에 제약을 주기

   ```c
   const keys = string | number
   interface obj<T extends keyof(keys)>{
     (a:T, b:T) => T
   }
   const b :obj<number> = (a, b) => a + b //정상 동작한다
   const b :obj<object> = (a, b) => a + b //에러가 발생하게 된다.

   function forEach1<T>(arr:T[],callback:(item:T) => void):void{
    for(let i = 0 ; i < arr.length ; i++){
        callback(arr[i])
    }
   }
   forEach1<number>([1,2,4], (item)=>{
     console.log(item)
   });
   ```

5. 타입가드
   - 타입을 정의 해주는 함수만들기
   - is를 사용해서 타입을 넘겨준다.
   - as 를 안쓰려고 만들어 준다.
   - 조건문을 통과 한 다음에는 타입이 변경 된다.
   ```c
   function isSub(data: Card // class): data is Sub {
     if(data.cost){
       return  true;
     }
     return false;
   }
   ```

# 5 모듈 시스템

1. module.exports 를 붙이는 순간 모듈이 된다. (nodejs - commonjs)
   - require('./경로')
   - 다른 파일에서 사용할 수 있도록 만들 수 있다. (가독성과, 재사용성을 높힌다.)
   - exports.a = "b" 다음과 같이도 사용할 수 있다. 객체를 사용할때 const {} = require('./경로');
2. ES2015이후 에는??

   - export const a = "b"
   - import {a} from "./경로";
   - export default function(){}
   - import \* as hi from "./경로"; -> module.export = function(){}
   - import hi from "./경로" -> export defaul();

3. d.ts 파일에 따른 import 방법
   - function a(){}
   - export = a
   - import a= require("./경로")
4. 패키지의 좋은 예
   - 1. npm install 할 때 d.ts 파일이 있는 경우 엠비언트 모듈 [redux][axios]
   - 2. index.d.ts 없는 경우..... --> npm install @types/react 와 같이 남이 타입을 만들어 둔 것을 사용한다.
   - 3. 헐.. 타입이 없는 경우는??.. 내가 쓸 부분만 내가 타입을 만들어 줘야 한다.
     - types/can-use-dom.d.ts 만들어서 직접 만든다.
     - declare module "can-use-dom"{ export default canUserDom}
     - tsconfig.json "typeRoots":["경로"]
       ```c
       declare module "can-use-dom"{
         내가 사용하는 것만 적어 준다.
         const canUseDom : boolean
         export default canUserDom
       }
       ```
   - 4. window.hell 와 같이 정의 할 경우에는?
     ```c
     export {}
     declare global{
       interface Window{
         hello:string
       }
     }
     ```
   - 5. 타입을 틀리게 해놓은 경우.. 최악이군...
     ```c
     npm rm @types/connect-flash
     지우고 내가 다시 정의해서 만들기 내부에서 사용하는 모듈 타입을 잘 설치 해줘야 한다.
     ```
