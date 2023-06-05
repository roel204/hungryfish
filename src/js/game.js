import '../css/style.css'
import {Engine} from "excalibur"
import {ResourceLoader} from './resources.js'
import {Begin} from './begin_scene.js'
import {Level1} from './level_scene.js'
import {GameOver} from './gameover_scene.js'

export class Game extends Engine {

    constructor() {
        //Set window size and load resources.
        super({width: 1400, height: 700})
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        //Create multiple scenes
        this.add('start', new Begin())
        this.add('level1', new Level1())
        this.add('gameover', new GameOver())

        this.goToScene('start')

        //this.showDebug(true)
    }
}

new Game()
