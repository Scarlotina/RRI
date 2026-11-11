import { GAME_STATES } from "./config.js";
import { world } from "./world.js";

function normalizeKey(key) {
	switch (key) {
		case "arrowup":
			return "w";
		case "arrowleft":
			return "a";
		case "arrowdown":
			return "s";
		case "arrowright":
			return "d";
		default:
			return key;
	}
}

// --- Tipkovnica -------------------------------------------------------------
export function bindInput() {
	function updateMousePosition(event) {
		const rect = world.canvas.getBoundingClientRect();
		const x = event.clientX - rect.left - world.canvas.clientLeft;
		const y = event.clientY - rect.top - world.canvas.clientTop;
		const inside =
			x >= 0 &&
			x < world.canvas.clientWidth &&
			y >= 0 &&
			y < world.canvas.clientHeight;

		world.mouse.inside = inside;
		if (inside) {
			world.mouse.x = (x / world.canvas.clientWidth) * world.W;
			world.mouse.y = (y / world.canvas.clientHeight) * world.H;
		}
	}

	world.canvas.addEventListener("pointermove", updateMousePosition);

	world.canvas.addEventListener("pointerdown", (event) => {
		if (event.button !== 0) return;
		updateMousePosition(event);
		world.mouse.down = true;
	});

	world.canvas.addEventListener("pointerleave", () => {
		world.mouse.inside = false;
	});

	window.addEventListener("pointerup", () => {
		world.mouse.down = false;
	});

	window.addEventListener("pointercancel", () => {
		world.mouse.down = false;
	});

	window.addEventListener("keydown", (event) => {
		const key = normalizeKey(event.key.toLowerCase());
		if (key === "p" && !event.repeat) {
			world.state =
				world.state === GAME_STATES.PLAYING
					? GAME_STATES.PAUSED
					: GAME_STATES.PLAYING;
			}

		if (key in world.keys) {
			world.keys[key] = true;
			event.preventDefault(); // Prepreči drsenje strani pri tipkah.
		}
	});

	window.addEventListener("keyup", (event) => {
		const key = normalizeKey(event.key.toLowerCase());
		if (key in world.keys) {
			world.keys[key] = false;
		}
	});
}
