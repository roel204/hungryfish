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
        //Set Enemy sprite, tint, postion and set collider.
        this.engine = engine
        this.sprite = Resources.Fish.toSprite()
        this.graphics.use(this.sprite)
        this.sprite.tint = new Color(255, 30, 30)
        this.resetPosition()
        this.on("collisionstart", (event) => this.onCollision(event, this.engine))
    }

    onCollision(e, engine) {
        //If Enemy touch player reset location and remove HP.
        if (e.other instanceof Player) {
            this.resetPosition()
            engine.currentScene.health.loseHealth(-200) //Class communicating trough game/engine.
            // noinspection JSIgnoredPromiseFromCall
            Resources.Damage2.play(1)
        }
    }
}