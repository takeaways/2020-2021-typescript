function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add<T extends number | string>(p1: T, p2: T): T {
	return p1 + p2;
}

const a = add<number>(10, 20);
console.log(a);
