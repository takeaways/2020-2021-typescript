/*
인터페이스로 타입 정의 하기
*/

//객체
interface Person {
	name: string;
}
interface Person {
	name: string;
	age?: number | undefined;
}

const p1 :Person = {
    name:'go'
    age:undefined
}
