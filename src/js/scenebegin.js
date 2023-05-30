import { Scene } from "excalibur"

export class Begin extends Scene {

    game

    onInitialize(engine) {
        this.game = engine
    }

    onActivate(ctx) {
        console.log("the scene begin has started!")
    }

    gameOver() {
        this.game.goToScene('gameover')
    }
}