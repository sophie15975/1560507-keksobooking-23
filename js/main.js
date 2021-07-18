import {generateAdPosition} from './generateAdPosition.js';

const adPositionArray = generateAdPosition();
console.log(adPositionArray);
const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(adPositionArray[0]);
