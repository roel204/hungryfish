import { Actor, Vector, Color, Sprite, Rectangle, clamp} from 'excalibur'
import {Resources} from "./resources.js";

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

    resetHealth(){
        this.healthrectangle.width = 200
    }

    loseHealth(damage) {
        this.healthrectangle.width = Math.max(1, this.healthrectangle.width - damage);
    }
}