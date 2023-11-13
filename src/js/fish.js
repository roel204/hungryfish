import {Actor, Vector} from "excalibur"
import {Resources} from "./resources.js";
import {Player} from "./player.js";

export class Fish extends Actor {

    engine
    sprite

    constructor() {
        super({width: Resources.Fish.width, height: Resources.Fish.height})
    }

    onInitialize(engine) {
        //Set Fish Sprite, Position and collider event.
        this.engine = engine
        this.sprite = Resources.Fish.toSprite()
        this.graphics.use(this.sprite)
        this.resetPosition()
        this.on("precollision", (event) => this.onCollision(event, engine))
    }

    onPostUpdate(engine) {
        //Makes the Fish bounce like DvD logo.
        if (this.pos.x < Resources.Fish.width / 2 || this.pos.x + Resources.Fish.width / 2 > engine.drawWidth) {
            this.vel.x = -this.vel.x;
        }
        if (this.pos.y < Resources.Fish.height / 2 || this.pos.y + Resources.Fish.height / 2 > engine.drawHeight) {
            this.vel.y = -this.vel.y;
        }
    }

    resetPosition() {
        //Event to reset the Fish when collided.
        this.pos = new Vector(Math.random() * 1200 + 100, Math.random() * 500 + 100)
        this.vel = new Vector(Math.random() * 100 - 50, Math.random() * 100 - 50)
    }

    onCollision(e, engine) {
        //If touched Player then reset pos and give health.
        if (e.other instanceof Player) {
            this.resetPosition()
            engine.currentScene.health.loseHealth(35) //Class communicating trough game/engine.
            // noinspection JSIgnoredPromiseFromCall
            Resources.Beep.play(1)
        }
    }
}