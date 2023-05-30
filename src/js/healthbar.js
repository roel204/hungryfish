import { Actor, Vector, Color, Sprite, Rectangle, clamp } from 'excalibur'

export class HealthBar extends Actor {

    healthrectangle

    constructor() {
        super({ width: 200, height: 30 })
        this.healthrectangle = new Rectangle({
            width: 200,
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
        this.healthrectangle.width = this.healthrectangle.width - damage

        if (this.healthrectangle.width <= 0) {
            this.game.goToScene('gameover')
        }
    }
}