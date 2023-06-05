import {Color, Font, Label, Scene, Vector, Actor} from "excalibur"
import {Resources} from "./resources.js";
import {Leaderboard} from "./leaderboard.js"

export class Begin extends Scene {

    game

    onInitialize(engine) {
        this.game = engine

        //Add Title Text
        const titleLabel = new Label({
            pos: new Vector(engine.drawWidth / 2, 100),
            text: 'Hungry Fish',
            color: Color.White,
            font: new Font({
                size: 72,
                family: 'Arial',
                textAlign: 'center',
            }),
        });
        titleLabel.anchor.setTo(0.5, 0.5);
        this.add(titleLabel);

        //Create and add High Score Label.
        this.highScoreLabel = new Label({
            pos: new Vector(50, 100),
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