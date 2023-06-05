import { Actor, Vector, Rectangle, Color } from 'excalibur';

export class HealthBar extends Actor {
    healthrectangle;

    constructor() {
        super({ width: 200, height: 30 });
        this.healthrectangle = new Rectangle({
            width: 500,
            height: 30,
        });
        this.anchor = new Vector(0, 0);
        this.graphics.use(this.healthrectangle);
    }

    loseHealth(damage) {
        const newWidth = Math.max(1, this.healthrectangle.width - damage);

        // Calculate RGB values based on the new width
        const red = Math.round(255 * (1 - newWidth / 800));
        const green = Math.round(255 * (newWidth / 500));

        this.healthrectangle.width = newWidth;
        this.healthrectangle.color = Color.fromRGB(red, green, 0);
    }
}
