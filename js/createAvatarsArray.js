
import {createRandomIntArray} from './createRandomIntArray.js';


export const createAvatarsArray =  function(){
  const  array = createRandomIntArray();
  const avatarAddress = [];
  for(let index = 0; index < 10; index++){
    avatarAddress.push(`img/avatars/user${array[index]}.png`) ;
  }
  return avatarAddress;
};
