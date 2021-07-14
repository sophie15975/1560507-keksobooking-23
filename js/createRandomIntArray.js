
import {returnRandomInteger} from './returnRandomInteger.js';

export const createRandomIntArray = function(){
  const randomIntArray = [];
  for(let index = 0; index < 10; index++) {
    let randomInt;
    randomInt = returnRandomInteger(1, 10);
    if (randomInt !== 10) {
      randomInt = `0${randomInt}`;
    }
    if (!randomIntArray.includes(randomInt)){
      randomIntArray.push(randomInt);
    }
    else { index--;
    }

  }

  return randomIntArray;
};
