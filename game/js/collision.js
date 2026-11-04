import { walls } from "./config.js";
import { world } from "./world.js";

export function aabbOverlap(a, b) {
	return (
		a.x < b.x + b.w &&
		a.x + a.w > b.x &&
		a.y < b.y + b.h &&
		a.y + a.h > b.y
	);
}

export function moveWithWalls(player, dx, dy) {
	let enemyCollision = false;

	player.x += dx;
	const xHitsWall = walls.some((wall) => aabbOverlap(player, wall));
	const xHitsEnemy = world.enemies.some((enemy) => aabbOverlap(player, enemy));
	if (xHitsWall || xHitsEnemy) {
		player.x -= dx;
	}
	enemyCollision ||= xHitsEnemy;

	player.y += dy;
	const yHitsWall = walls.some((wall) => aabbOverlap(player, wall));
	const yHitsEnemy = world.enemies.some((enemy) => aabbOverlap(player, enemy));
	if (yHitsWall || yHitsEnemy) {
		player.y -= dy;
	}
	enemyCollision ||= yHitsEnemy;

	return enemyCollision;
}
