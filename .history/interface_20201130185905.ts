/*
인터페이스로 타입 정의 하기
*/

//객체
interface Person {
	readonly name: string;
}
interface Person {
	age: number;
	[key: string]: string | number;
}

const p1: Person = {
	name: "go",
	age: 1,
};

const p2: Person = {
	name: "gi",
	age: 2,
};

//속성이름 숫자 내부적으로 문자열
interface YearPriceMap {
	[year: number]: string | number;
}
