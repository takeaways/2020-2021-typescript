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
      "exclude": ["*.js"], //컴파일을 제외할 파일의 목록
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
5. never const a : []  = []
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