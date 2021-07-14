
import {returnRandomFloat} from './returnRandomFloat.js';

export const createLatArray = function(){
  const latArray = [];
  for (let index = 0; index < 10; index++){
    latArray[index]= returnRandomFloat(35.65000, 35.70000, 2);
  }
  return latArray;
};
