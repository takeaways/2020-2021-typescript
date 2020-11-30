//중복코드 제거 가능
// function makeNumberArray<T>(defaultValue: number, size: number): number[];
// function makeNumberArray(defaultValue: string, size: string): string[];
function makeNumberArray<T>(defaultValue: T, size: number): T[] {
	const arr: T[] = [];
	for (let i = 0; i < size; i++) {
		arr.push(defaultValue);
	}
	return arr;
}

const ar = makeNumberArray(10, 3);
console.log(ar);
