import {returnRandomInteger} from './returnRandomInteger.js';

export const createPhotosArray = function(){
  const photos = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ];
  const photosArray = [];
  for(let index = 0; index < 10; index++){
    const newArray = [];
    newArray.length = returnRandomInteger(1, 3);
    for(let iks = 0; iks < newArray.length; iks++){
      const random = returnRandomInteger(0, 2);
      if(!newArray.includes(photos[random])){
        newArray[iks] = photos[random];
      }
      else {
        iks--;
      }
    }
    photosArray[index] = newArray;
  }

  return photosArray;
};
