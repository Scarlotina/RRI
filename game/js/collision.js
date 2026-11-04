import { walls } from "./config.js";

export function aabbOverlap(a, b) {
	return (
		a.x < b.x + b.w &&
		a.x + a.w > b.x &&
		a.y < b.y + b.h &&
		a.y + a.h > b.y
	);
}

export function moveWithWalls(player, dx, dy) {
	player.x += dx;
	if (walls.some((wall) => aabbOverlap(player, wall))) {
		player.x -= dx;
	}

	player.y += dy;
	if (walls.some((wall) => aabbOverlap(player, wall))) {
		player.y -= dy;
	}
}
