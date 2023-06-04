import { Color, Label, Scene, Vector } from 'excalibur'

export class GameOver extends Scene {
    game
    highScoreLabel
    highScore
    currentTime

    onInitialize(engine) {
        this.game = engine
        this.highScore = parseFloat(localStorage.getItem('highScore')).toFixed(2) || 0

        this.highScoreLabel = new Label({
            pos: new Vector(100, 200),
            width: 200,
            height: 40,
            color: Color.White
        })
        this.add(this.highScoreLabel)
    }

    onActivate(ctx) {
        console.log('The scene Game Over has started!')

        if (ctx.data) {
            this.currentTime = parseFloat(ctx.data.time.toFixed(2))

            if (this.currentTime > this.highScore) {
                localStorage.setItem('highScore', this.currentTime)
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
            color: Color.White
        })
        startButton.on('pointerup', () => {
            this.game.goToScene('start')
        })
        this.add(startButton)
    }

    showHighScoreText(isNewHighScore) {
        if (isNewHighScore) {
            this.highScoreLabel.text = `You got a new High Score: ${this.highScore}`
        } else {
            this.highScoreLabel.text = `Time: ${this.currentTime} High Score: ${this.highScore}`
        }
    }
}
