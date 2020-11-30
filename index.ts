import { waitForInput } from "./Input";

(async () => {
	while (true) {
		console.clear();

		const key = await waitForInput("input command: ");
	}
})();
