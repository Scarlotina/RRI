import { BULLET_COOLDOWN, BULLET_SIZE, BULLET_SPEED } from "./config.js";
import { world } from "./world.js";

export function shoot() {
	const player = world.player;
	const centerX = player.x + player.w / 2;
	const centerY = player.y + player.h / 2;
	let vx = world.mouse.x - centerX;
	let vy = world.mouse.y - centerY;
	const distance = Math.hypot(vx, vy);

	if (distance < 1) return;

	vx /= distance;
	vy /= distance;
	world.bullets.push({
		x: centerX - BULLET_SIZE / 2,
		y: centerY - BULLET_SIZE / 2,
		w: BULLET_SIZE,
		h: BULLET_SIZE,
		vx,
		vy,
	});
	world.shotTimer = BULLET_COOLDOWN;
}

export function updateBullets(dt) {
	for (let i = world.bullets.length - 1; i >= 0; i--) {
		const bullet = world.bullets[i];
		bullet.x += bullet.vx * BULLET_SPEED * dt;
		bullet.y += bullet.vy * BULLET_SPEED * dt;

		if (
			bullet.x + bullet.w < 0 ||
			bullet.x > world.W ||
			bullet.y + bullet.h < 0 ||
			bullet.y > world.H
		) {
			world.bullets.splice(i, 1);
		}
	}
}
