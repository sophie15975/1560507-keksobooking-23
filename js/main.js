

function returnRandomInteger(min, max){
  if (min < 0) {
    return 'min не может быть меньше 0';
  }
  min = Math.abs(min);
  max = Math.abs(max);
  const randomInt = min + Math.random() * (max - min);

  if (min < max) {
    return Math.round(randomInt);
  } else if ((min >= max)){
    return 'max должен быть больше, чем min';
  }
}


function returnRandomFloat(min, max, signAfterComma){
  if (min < 0) {
    return 'min не может быть меньше 0';
  }

  min = Math.abs(min);
  max = Math.abs(max);

  let randomFloat = min + Math.random() * (max - min);
  randomFloat = randomFloat.toFixed(signAfterComma);


  if (min < max) {
    return randomFloat;
  } else if (min >= max) {

    return 'неверный диапазон';
  }
}


const createRandomIntArray = function(){
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

const createAvatarsArray =  function(){
  const  array = createRandomIntArray();
  const avatarAddress = [];
  for(let index = 0; index < 10; index++){
    avatarAddress.push(`img/avatars/user${array[index]}.png`) ;
  }
  return avatarAddress;
};


const createFeaturesArray = function(){
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

const createPhotosArray = function(){
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


const createLatArray = function(){
  const latArray = [];
  for (let index = 0; index < 10; index++){
    latArray[index]= returnRandomFloat(35.65000, 35.70000, 2);
  }
  return latArray;
};

const createLngArray = function(){
  const lngArray = [];
  for (let index = 0; index < 10; index++){
    lngArray[index]= returnRandomFloat(139.70000, 139.80000, 2);
  }
  return lngArray;
};


function createAdvertismentsArray(){
  const avatarsArray = createAvatarsArray();

  const titlesArray = ['квартира на Моховой', 'квартира на Ветеранов', 'хостел на Достоевской', 'квартира пл. Ленина', 'хостел на Фонтанке', 'хостел на Достоевской', 'Друзья на Невском', 'двушка на Ваське', 'Можно с животными', 'сдается студия'];
  const typesArray = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const checkinArray =  ['12:00', '13:00', '14:00'];
  const checkoutArray = ['12:00', '13:00', '14:00'];
  const featuresArray = createFeaturesArray();
  const descriptionArray = ['просторная, для 2-х человек', 'можно с питомцами', 'в центре Питера, 2 шага до м. Достоевская', 'не подходит для младенцев', 'не подходит для одиноких мужчин', 'нельзя курить', '5 минут до Дворцовой площиди', 'уютная студия в 5 минутах от метро', 'сдается впервые после ремонта', '2-комнатая квартира с прекрасным видом на Исаакий'];
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
        titel : titlesArray[index],
        address :`${latArray[index]}, ${lngArray[index]}`,
        price : returnRandomInteger(9000, 55000),
        type : typesArray[returnRandomInteger(0, typesArray.length)],
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
createAdvertismentsArray();


