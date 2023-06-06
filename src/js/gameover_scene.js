import {Actor, Color, Font, Label, Scene, Vector} from 'excalibur'
import {Resources} from "./resources.js"
import {Leaderboard} from "./leaderboard.js"

export class GameOver extends Scene {
    game
    highScoreLabel
    playerNameLabel
    currentTime

    onInitialize(engine) {
        this.game = engine

        //Add Game Over Text.
        const gameOverLabel = new Label({
            pos: new Vector(engine.drawWidth / 2, 100),
            text: 'Game Over',
            color: Color.White,
            font: new Font({
                size: 72,
                family: 'Arial',
                textAlign: 'center',
            }),
        })
        gameOverLabel.anchor.setTo(0.5, 0.5)
        this.add(gameOverLabel)

        //Add High Score label.
        this.highScoreLabel = new Label({
            pos: new Vector(50, 100),
            color: Color.White,
            font: new Font({
                size: 30
            })
        })
        this.add(this.highScoreLabel)

        //Add Player Name label.
        this.playerNameLabel = new Label({
            pos: new Vector(engine.drawWidth / 2, 180),
            color: Color.White,
            font: new Font({
                size: 30,
                family: 'Arial',
                textAlign: 'center',
            })
        })
        gameOverLabel.anchor.setTo(0.5, 0.5)
        this.add(this.playerNameLabel)
    }

    onActivate(ctx) {

        const leaderboard = new Leaderboard()

        if (ctx.data) {
            //Add player to the leaderboard.
            const playerName = localStorage.getItem('playerName')
            this.currentTime = parseFloat(ctx.data.time).toFixed(2);
            leaderboard.addScore(playerName, this.currentTime)
            this.highScoreLabel.text = leaderboard.getFormattedTopScores()
            this.playerNameLabel.text = `Name: ${playerName}\n\n Time: ${this.currentTime}`
        }

        //Create Retry button.
        const retryButton = new Actor({
            pos: new Vector(700, 350),
            width: Resources.Retry.toSprite().width,
            height: Resources.Retry.toSprite().height,
        })
        retryButton.graphics.use(Resources.Retry.toSprite())
        retryButton.on('pointerup', () => {
            // noinspection JSIgnoredPromiseFromCall
            Resources.Click.play(1)
            this.game.goToScene('start')
        })
        this.add(retryButton)
    }
}
