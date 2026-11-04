// --- Platno -----------------------------------------------------------------
const canvas = document.getElementById("game");

// --- Skupno stanje ----------------------------------------------------------
export const world = {
	canvas,
	ctx: canvas.getContext("2d"),
	W: canvas.width,
	H: canvas.height,
	// Igralca ustvari glavna datoteka game.js.
	player: null,
	// true = tipka je trenutno pritisnjena.
	keys: { w: false, a: false, s: false, d: false },
};

/**
 * Preveri, ali se pravokotnika a in b prekrivata.
 * @param {{ x: number, y: number, w: number, h: number }} a
 * @param {{ x: number, y: number, w: number, h: number }} b
 * @returns {boolean}
 */
export function aabbOverlap(a, b) {
	return (
		a.x < b.x + b.w &&
		a.x + a.w > b.x &&
		a.y < b.y + b.h &&
		a.y + a.h > b.y
	);
}