import {Font, FontUnit, Label, Scene, Vector, Timer} from "excalibur"
import {Player} from "./player.js";
import {Fish} from "./fish.js";
import {Enemy} from "./enemy.js";
import {HealthBar} from "./healthbar.js";

export class Level1 extends Scene {

    health
    game
    time = 0
    score
    engine

    onInitialize(engine) {
        this.game = engine
    }

    onActivate(ctx) {
        const player = new Player()
        this.add(player)

        for (let i = 0; i < 10; i++) {
            const fish = new Fish()
            this.add(fish)
        }

        const enemy = new Enemy()
        this.add(enemy)

        const health = new HealthBar()
        this.health = health
        this.add(health)

        this.score = new Label({
            text: 'Time: 0.00',
            pos: new Vector(50, 50),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        });
        this.add(this.score)

        const timer = new Timer({
            fcn: () => this.onTimer(this.engine),
            repeats: true,
            interval: 50,
        })
        this.add(timer)
        timer.start()
    }

    onTimer(engine) {
        this.time += 0.05
        this.score.text = `Time: ${this.time.toFixed(2)}`
        engine.currentScene.health.loseHealth(1.5)
        if (this.health.healthrectangle.width <= 1) {
            console.log("DIE")
        }
    }

    updateScore(engine) {
        engine.currentScene.health.loseHealth(-10)
    }
}