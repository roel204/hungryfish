import '../css/style.css'
import {Actor, Engine, Vector, Label, Font, FontUnit} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'

export class Game extends Engine {

    score = 0
    mylabel

    constructor() {
        super({ width: 1400, height: 700 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        for (let i = 0; i < 10; i++) {
            const fish = new Fish()
            this.add(fish)
        }

        this.mylabel = new Label({
            text: 'Score: 0',
            pos: new Vector(50, 50),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        });
        this.add(this.mylabel)
    }

    updateScore() {
        this.score += 1
        this.mylabel.text = `Score:${this.score}`
    }
}

new Game()
