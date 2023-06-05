import {Color, Font, Label, Scene, Vector, Actor} from "excalibur"
import {Resources} from "./resources.js";
import {Leaderboard} from "./leaderboard.js"

export class Begin extends Scene {

    game

    onInitialize(engine) {
        this.game = engine

        //Create and add High Score Label.
        this.highScoreLabel = new Label({
            pos: new Vector(50, 50),
            color: Color.White,
            font: new Font({
                size: 30
            })
        });
        this.add(this.highScoreLabel)
    }

    onActivate(ctx) {

        const leaderboard = new Leaderboard()
        this.highScoreLabel.text = leaderboard.getFormattedTopScores()

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
    }
}