import '../css/style.css'
import { Engine } from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {Begin} from './scenebegin.js'
import {Level1} from './scenelvl1.js'
import {GameOver} from './scenegameover.js'

export class Game extends Engine {

    constructor() {
        super({width: 1400, height: 700})
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('start', new Begin())
        this.add('level1', new Level1())
        this.add('gameover', new GameOver())

        this.goToScene('start')
    }
}

new Game()
