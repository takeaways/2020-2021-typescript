import { Priority } from "./.history/types_20201130211053";
import { Command, NewTodo, PrintTodos } from "./app/commands/Command";
import { waitForInput } from "./app/Input";
import Todo from "./app/Todo";
import { AppState } from "./app/type";

const commands: Command[] = [new PrintTodos(), new NewTodo()];

(async () => {
	const state: AppState = {
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
			await command.run(state);
		}
	}
})();
