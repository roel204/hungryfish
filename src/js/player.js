import { Actor, Vector, Color, Engine, Input } from "excalibur"
import {Resources} from "./resources.js";

export class Player extends Actor {

    engine
    sprite

    constructor() {
        super({width: Resources.Fish.width, height: Resources.Fish.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.sprite = Resources.Fish.toSprite()
        this.graphics.use(this.sprite)
        this.sprite.tint = new Color(0, 0, 0)
        this.pos = new Vector(100, 300)
    }

    onPreUpdate(engine) {

        let xspeed = 0
        let yspeed = 0

        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {
            yspeed = -300
        }
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) {
            yspeed = 300
        }
        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
            xspeed = -300
        }
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
            xspeed = 300
        }
        this.vel = new Vector(xspeed, yspeed)
    }

}
