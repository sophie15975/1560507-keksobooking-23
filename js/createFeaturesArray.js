import {returnRandomInteger} from './returnRandomInteger.js';


export const createFeaturesArray = function(){
  const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const featuresArray = [];
  for (let index = 0; index < 10; index++){
    const newArray = [];
    newArray.length = returnRandomInteger(1,6);
    for (let iks = 0; iks < newArray.length; iks++){
      const random = returnRandomInteger(0, 5);
      if(!newArray.includes(features[random])){
        newArray[iks] = features[random];
      }
      else {
        iks--;
      }
    }
    featuresArray[index] = newArray;
  }
  return featuresArray;

};
