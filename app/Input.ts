import readline from "readline";

const readlineInterface = readline.createInterface(
	process.stdin,
	process.stdout
);

export function waitForInput(msg: string) {
	return new Promise((res) => {
		readlineInterface.question(msg, (name) => {
			res(name);
		});
	});
}
