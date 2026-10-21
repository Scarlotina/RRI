import { world } from "./world.js";

// --- Tipkovnica -------------------------------------------------------------
export function bindInput() {
	window.addEventListener("keydown", (event) => {
		const key = event.key.toLowerCase();
		if (key in world.keys) {
			world.keys[key] = true;
			event.preventDefault(); // Prepreči drsenje strani pri tipkah.
		}
	});

	window.addEventListener("keyup", (event) => {
		const key = event.key.toLowerCase();
		if (key in world.keys) {
			world.keys[key] = false;
		}
	});
}