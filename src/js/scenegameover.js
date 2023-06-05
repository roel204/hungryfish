import { Color, Font, Label, Scene, Vector, Actor } from 'excalibur'
import {Resources} from "./resources.js";

export class GameOver extends Scene {
    game
    highScoreLabel
    highScore
    currentTime

    onInitialize(engine) {
        this.game = engine

        //Add High Score label
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
        //Put highscore from localstorage inside var
        this.highScore = parseFloat(localStorage.getItem('highScore')) || 0

        if (ctx.data) {
            this.currentTime = parseFloat(ctx.data.time.toFixed(2))

            if (this.currentTime > this.highScore) {
                this.highScore = this.currentTime
                localStorage.setItem('highScore', this.highScore.toFixed(2))
                this.showHighScoreText(true)
            } else {
                this.showHighScoreText(false)
            }
        }

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

    showHighScoreText(isNewHighScore) {
        if (isNewHighScore) {
            this.highScoreLabel.text = `You got a new High Score: ${this.highScore.toFixed(2)}`
        } else {
            this.highScoreLabel.text = `Time: ${this.currentTime.toFixed(2)} | High Score: ${this.highScore.toFixed(2)}`
        }
    }
}
