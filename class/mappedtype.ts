export {};
type T1 = { [K in "p1" | "p2"]: boolean };

interface Person {
	name: string;
	age: number;
}
type MakeBoolean<T> = { [P in keyof T]?: boolean };
const pMap: MakeBoolean<Person> = {};
pMap.name = true;
pMap.age = false;
