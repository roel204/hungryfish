import { Actor, Vector, Color, Rectangle} from 'excalibur'

export class HealthBar extends Actor {

    healthrectangle


    constructor() {
        super({ width: 200, height: 30 })
        this.healthrectangle = new Rectangle({
            width: 500,
            height: 30,
            color: Color.Red,
        })
        this.anchor = new Vector(0, 0)
        this.graphics.use(this.healthrectangle)
    }

    loseHealth(damage) {
        this.healthrectangle.width = Math.max(1, this.healthrectangle.width - damage);
    }
}