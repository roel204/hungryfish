import { Actor, Vector, Color, Engine, Input } from "excalibur"
import {Resources} from "./resources.js";
import {Player} from "./player.js";

export class Speed extends Player {

    engine

    constructor() {
        super({width: Resources.Fish.width, height: Resources.Fish.height})
    }

    onInitialize(engine) {
        this.engine = engine
    }

    onPreUpdate(engine) {

    }
}