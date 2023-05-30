import {Actor, Vector, Color, Engine} from "excalibur"
import {Resources} from "./resources.js";
import {Player} from "./player.js";

export class Fish extends Actor {

    engine
    sprite

    constructor() {
        super({width: Resources.Fish.width, height: Resources.Fish.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.sprite = Resources.Fish.toSprite()
        this.graphics.use(this.sprite)
        this.resetPosition()
        this.on("collisionstart", (event) => this.onCollision(event))
    }

    resetPosition() {
        this.pos = new Vector(Math.random() * 1200 + 100, Math.random() * 500 + 100)
        this.vel = new Vector(Math.random() * 100 - 50, Math.random() * 100 - 50)
        this.sprite.tint = new Color(Math.random() * 256, Math.random() * 256, Math.random() * 256)
    }

    onPostUpdate(engine) {
        if (this.pos.x < Resources.Fish.width / 2 || this.pos.x + Resources.Fish.width / 2 > engine.drawWidth) {
            this.vel.x = -this.vel.x;
        }
        if (this.pos.y < Resources.Fish.height / 2 || this.pos.y + Resources.Fish.height / 2 > engine.drawHeight) {
            this.vel.y = -this.vel.y;
        }
    }

    onCollision(e) {
        if (e.other instanceof Player) {
            this.engine.currentScene.updateScore(this.engine)
            this.resetPosition()
        } else {
            this.vel.x = -this.vel.x;
            this.vel.y = -this.vel.y;
        }
    }
}