import {Scene} from "excalibur"

export class GameOver extends Scene {

    game

    onInitialize(engine) {
        this.game = engine
    }

    onActivate(ctx) {
        console.log("the scene Game Over has started!")
    }
}