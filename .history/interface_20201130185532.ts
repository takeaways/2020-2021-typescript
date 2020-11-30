/*
인터페이스로 타입 정의 하기
*/

//객체
interface Person {
	name: string;
	age: number;
}
interface Person {
	name: string;
	age?: number | undefined;
}
