import {returnRandomInteger} from './returnRandomInteger.js';
import {createAvatarsArray} from './createAvatarsArray.js';
import {createFeaturesArray} from './createFeaturesArray.js';
import {createPhotosArray} from './createPhotosArray.js';
import {createLatArray} from './createLatArray.js';
import {createLngArray} from './createLngArray.js';
import {typesArray} from './typesArray.js';
import {checkinArray} from './checkin.js';
import {titlesArray} from './adsTitles.js';
import {descriptionArray} from './roomDescription.js';
import {checkoutArray} from './checkout.js';


export function createAdvertismentsArray(){
  const avatarsArray = createAvatarsArray();
  const featuresArray = createFeaturesArray();
  const photosArray = createPhotosArray();
  const latArray = createLatArray();
  const lngArray = createLngArray();
  const advertismentsArray = [];
  for(let index = 0; index < 10; index++){
    const advertisment = {
      author:{
        avatar : avatarsArray[index],
      },
      location:{
        lat : latArray[index],
        lng : lngArray[index],

      },
      offer:{
        title : titlesArray[index],
        address :`${latArray[index]}, ${lngArray[index]}`,
        price : returnRandomInteger(9000, 55000),
        type : typesArray[returnRandomInteger(0, typesArray.length-1)],
        rooms : returnRandomInteger(1,5),
        guests : returnRandomInteger(1,25),
        checkin : checkinArray[returnRandomInteger(0, (checkinArray.length-1))],
        checkout : checkoutArray[returnRandomInteger(0, (checkinArray.length-1))],
        features : featuresArray[index],
        description : descriptionArray[index],
        photos : photosArray[index],

      },
    };
    advertismentsArray[index] = advertisment;

  }
  return advertismentsArray;

}

