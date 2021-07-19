import {generateAdPosition} from './generateAdPosition.js';

const adPositionArray = generateAdPosition();
const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(adPositionArray[0]);
