import {Color} from "excalibur"
import {Resources} from "./resources.js";
import {Player} from "./player.js";
import {Fish} from "./fish.js";

export class Enemy extends Fish {

    engine
    sprite

    constructor() {
        super({width: Resources.Fish.width, height: Resources.Fish.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.sprite = Resources.Fish.toSprite()
        this.graphics.use(this.sprite)
        this.sprite.tint = new Color(255, 30, 30)
        this.resetPosition()
        this.on("collisionstart", (event) => this.onCollision(event, this.engine))
    }

    onCollision(e, engine) {
        if (e.other instanceof Player) {
            this.resetPosition()
            engine.currentScene.health.loseHealth(200)
        }
    }
}