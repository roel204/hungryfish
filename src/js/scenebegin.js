import {Color, Font, Label, Scene, Vector, Actor} from "excalibur"
import {Resources} from "./resources.js";

export class Begin extends Scene {

    game
    highScore

    onInitialize(engine) {
        this.game = engine

        //Create and add High Score Label.
        this.highScoreLabel = new Label({
            pos: new Vector(engine.drawWidth / 2, 100),
            color: Color.White,
            font: new Font({
                size: 30
            })
        });
        this.add(this.highScoreLabel)
    }

    onActivate(ctx) {
        //Store High Score from local storage.
        this.highScore = parseFloat(localStorage.getItem('highScore')) || 0

        //Create Start button.
        const startButton = new Actor({
            pos: new Vector(700, 350),
            width: Resources.Start.toSprite().width,
            height: Resources.Start.toSprite().height,

        });
        startButton.graphics.use(Resources.Start.toSprite())
        startButton.on('pointerup', () => {
            this.game.goToScene('level1')
        })
        this.add(startButton)

        //Set the text inside the High Score Label.
        this.highScoreLabel.text = `Highscore to beat: ${this.highScore.toFixed(2)}`
    }
}