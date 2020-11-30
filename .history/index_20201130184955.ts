function add<T>(p1: T, p2: T): T {
	return p1 + p2;
}

const a = add<number>(10, 20);
console.log(a);
