import { waitForInput } from "../Input";
import {
	Action,
	ActionNewTodo,
	AppState,
	Priority,
	PRIORITY_NAME_MAP,
} from "../type";
import { getIsValidEnumValue } from "../util";
export abstract class Command {
	constructor(public key: string, private desc: string) {}

	toString() {
		return `${this.key}: ${this.desc}`;
	}

	async run(state: AppState): Promise<void | Action> {}
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

	async run(): Promise<void | ActionNewTodo> {
		const title = await waitForInput("title: ");
		const priorityStr = await waitForInput(
			`priority: ${PRIORITY_NAME_MAP[Priority.High]}(${Priority.High}) ~ ${
				PRIORITY_NAME_MAP[Priority.Low]
			}(${Priority.Low})`
		);
		const priority = Number(priorityStr);
		if (title && NewTodo.getIsPriority(priority)) {
			return {
				type: "newTodo",
				title,
				priority,
			};
		}
	}

	static getIsPriority(priority: number): priority is Priority {
		return getIsValidEnumValue(Priority, priority);
	}
}
