import { Command, NewTodo, PrintTodos } from "./app/commands/Command";
import { waitForInput } from "./app/Input";
import Todo from "./app/Todo";
import { Action, AppState, Priority } from "./app/type";

const commands: Command[] = [new PrintTodos(), new NewTodo()];

(async () => {
	let state: AppState = {
		todos: [
			new Todo("test1", Priority.High),
			new Todo("test2", Priority.Medium),
			new Todo("test3", Priority.Low),
		],
	};

	while (true) {
		console.clear();
		for (const command of commands) {
			console.log(command.toString());
		}
		console.log();
		const key = await waitForInput("input command: ");
		console.clear();
		const command = commands.find((item) => item.key === key);
		if (command) {
			const action = await command.run(state);
			if (action) {
				state = getNextState(state, action);
			}
		}
	}
})();

function getNextState(state: AppState, action: Action) {
	switch (action.type) {
		case "newTodo":
			return {
				...state,
				todos: [...state.todos, new Todo(action.title, action.priority)],
			};
	}
}
