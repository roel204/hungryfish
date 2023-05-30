import { Scene } from "excalibur"

export class Level1 extends Scene {

    game

    onInitialize(engine) {
        this.game = engine
    }

    onActivate(ctx) {
        console.log("the scene LVL1 has started!")
    }


    gameOver() {
        this.game.goToScene('gameover')
    }
}