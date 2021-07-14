import {returnRandomFloat} from './returnRandomFloat.js';

export const createLngArray = function(){
  const lngArray = [];
  for (let index = 0; index < 10; index++){
    lngArray[index]= returnRandomFloat(139.70000, 139.80000, 2);
  }
  return lngArray;
};
