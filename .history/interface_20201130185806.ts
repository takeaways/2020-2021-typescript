/*
인터페이스로 타입 정의 하기
*/

//객체
interface Person {
	readonly name: string;
}
interface Person {
	age?: number;
	[key: string]?: string | number;
}

const p1: Person = {
	name: "go",
	age: undefined,
};

const p2: Person = {
	name: "gi",
	age: 2,
};
