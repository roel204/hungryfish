import {Actor, Color, Font, Label, Scene, Vector} from 'excalibur'
import {Resources} from "./resources.js"
import {Leaderboard} from "./leaderboard.js"

export class GameOver extends Scene {
    game
    highScoreLabel
    currentTime

    onInitialize(engine) {
        this.game = engine

        //Add High Score label
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

        if (ctx.data) {
            this.currentTime = parseFloat(ctx.data.time.toFixed(2))
            leaderboard.addScore("TESTNAME", this.currentTime)
            this.highScoreLabel.text = leaderboard.getFormattedTopScores()
        }

        //Create Retry button.
        const retryButton = new Actor({
            pos: new Vector(700, 350),
            width: Resources.Retry.toSprite().width,
            height: Resources.Retry.toSprite().height,

        });
        retryButton.graphics.use(Resources.Retry.toSprite())
        retryButton.on('pointerup', () => {
            this.game.goToScene('start')
        })
        this.add(retryButton)
    }
}
