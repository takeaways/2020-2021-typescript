/*
인터페이스로 타입 정의 하기
*/

//객체
interface Person {
	readonly name: string;
}
interface Person {
	age?: number;
}

const p1: Person = {
	name: "go",
	age: undefined,
};
