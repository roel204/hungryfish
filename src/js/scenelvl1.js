import {Font, FontUnit, Label, Scene, Vector, Timer} from "excalibur"
import {Player} from "./player.js";
import {Fish} from "./fish.js";
import {Enemy} from "./enemy.js";
import {HealthBar} from "./healthbar.js";

export class Level1 extends Scene {

    engine
    game
    label
    timer
    time = 0
    health

    onInitialize(engine) {
        this.game = engine
    }

    onActivate(ctx) {
        //Reset Actors, Timer, Time
        this.actors.forEach((actor) => {
            this.remove(actor);
        });
        if (this.timer) {
            this.remove(this.timer)
        }
        this.time = 0

        //Add Player, Fish, Enemy, HP
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

        //Add the Label
        this.label = new Label({
            text: 'Time: 0.00',
            pos: new Vector(50, 50),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(this.label)

        //Create timer and activate it
        this.timer = new Timer({
            fcn: () => this.onTimer(),
            repeats: true,
            interval: 10,
        })
        this.add(this.timer)
        this.timer.start()
    }

    onTimer() {
        this.time += 0.01;
        this.label.text = `Time: ${this.time.toFixed(2)}`;
        this.health.loseHealth(1.5);
        if (this.health.healthrectangle.width <= 1) {
            this.game.goToScene("gameover", {time: this.time});
        }
    }
}