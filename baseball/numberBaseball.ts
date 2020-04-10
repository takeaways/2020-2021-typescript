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
