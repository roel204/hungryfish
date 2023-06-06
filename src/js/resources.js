import {ImageSource, Loader, Sound} from 'excalibur'
import fishImage from '../images/fish.png'
import startButton from '../images/start.png'
import retryButton from '../images/retry.png'
import beep from '../sfx/Beep.wav'
import click from '../sfx/Click.wav'
import damage1 from '../sfx/Damage1.wav'
import damage2 from '../sfx/Damage2.wav'
import type from '../sfx/Type.wav'

const Resources = {
    //Resource list.
    Fish: new ImageSource(fishImage),
    Start: new ImageSource(startButton),
    Retry: new ImageSource(retryButton),
    Beep: new Sound(beep),
    Click: new Sound(click),
    Damage1: new Sound(damage1),
    Damage2: new Sound(damage2),
    Type: new Sound(type)
}
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export {Resources, ResourceLoader}