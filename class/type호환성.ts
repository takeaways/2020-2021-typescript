//컴파일 타임에 호환성을 체크하자
//할당 가능을 판다

export {};
function fn1(a: number, b: number | string) {
	const v1: number | string = a;
	const v2: number | boolean | string = b; // 더 큰범위라 넣을 수 없다.
}

//내부 구조가 같으면 타입이 같다
//할당할 수있는 것이 클루록 값의 집합이 크다고 할 수 있는 것이다.
