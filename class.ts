export {};

class Person {
	private readonly age: number = 0;
	constructor(public name: string) {}

	say() {
		console.log("E");
	}
}

class Programmer extends Person {
	constructor(public name: string) {
		super(name);
	}
	say() {
		super.say();
		console.log("child");
	}
}
const p1 = new Programmer("he");
p1.say();
