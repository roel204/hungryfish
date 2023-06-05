import {ImageSource, Loader} from 'excalibur'
import fishImage from '../images/fish.png'
import startButton from '../images/start.png'
import retryButton from '../images/retry.png'

const Resources = {
    //Resource list.
    Fish: new ImageSource(fishImage),
    Start: new ImageSource(startButton),
    Retry: new ImageSource(retryButton)
}
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export {Resources, ResourceLoader}