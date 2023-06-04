import { Color, Font, Label, Scene, Vector } from 'excalibur'

export class GameOver extends Scene {
    game
    highScoreLabel
    highScore
    currentTime

    onInitialize(engine) {
        this.game = engine

        this.highScoreLabel = new Label({
            pos: new Vector(100, 200),
            width: 200,
            height: 40,
            color: Color.White,
            font: new Font({
                size: 30
            })
        });
        this.add(this.highScoreLabel)
    }

    onActivate(ctx) {
        console.log('The scene Game Over has started!')

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

        const startButton = new Label({
            pos: new Vector(100, 100),
            width: 100,
            height: 40,
            text: 'Start',
            color: Color.White,
            font: new Font({
                size: 30
            })
        })
        startButton.on('pointerup', () => {
            this.game.goToScene('start')
        })
        this.add(startButton)
    }

    showHighScoreText(isNewHighScore) {
        if (isNewHighScore) {
            this.highScoreLabel.text = `You got a new High Score: ${this.highScore.toFixed(2)}`
        } else {
            this.highScoreLabel.text = `Time: ${this.currentTime.toFixed(2)} | High Score: ${this.highScore.toFixed(2)}`
        }
    }
}
