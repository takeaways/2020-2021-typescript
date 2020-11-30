import { waitForInput } from "../Input";
import { AppState, Priority } from "../type";
import { getIsValidEnumValue } from "../util";
export abstract class Command {
	constructor(public key: string, private desc: string) {}

	toString() {
		return `${this.key}: ${this.desc}`;
	}

	async run(state: AppState): Promise<void> {}
}

export class PrintTodos extends Command {
	constructor() {
		super("p", "모든 할 일 출력하기");
	}

	async run(state: AppState) {
		for (const todo of state.todos) {
			console.log(todo.toString());
		}
		await waitForInput("press any key: ");
	}
}
export class NewTodo extends Command {
	constructor() {
		super("n", "할 일 추가하기");
	}

	async run() {
		const title = await waitForInput("title: ");
		const priorityStr = await waitForInput("priority: ");
		const priority = Number(priorityStr);
		if (title && NewTodo.getIsPriority(priority)) {
			//todo
		}
	}

	static getIsPriority(priority: number): priority is Priority {
		return getIsValidEnumValue(Priority, priority);
	}
}
