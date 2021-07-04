

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
  let randomInt;

  for(let index = 0; index < 10; index++) {
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

const createAddressesArray =  function(){
  const  array = createRandomIntArray();

  const avatarAddress = [];
  for(let index = 0; index < 10; index++){
    avatarAddress.push(`img/avatars/user${array[index]}.png`) ;
  }
  return avatarAddress;
};


const addressesArray = createAddressesArray();

const advertisementsArray = [];
const buildAuthor = function(avatarAddress){

  return {
    avatarAddress : avatarAddress,
  };
};


const buildOffer = function(title, address, price, type, rooms, guests, checkin, checkout, features, description, photos){
  return {
    title : title,
    address : address,
    price : price,
    type : type,
    rooms: rooms,
    guests : guests,
    checkin : checkin,
    checkout : checkout,
    features :  features,
    description : description,
    photos : photos ,
  };
};

const buildLocation = function(lat, lng){

  return {
    lat : lat,
    lng : lng,
  };
};

const buildAdvertisment = function(author, offer, locationn) {
  return {
    author : author,
    offer : offer,
    locationn: locationn,
  };
};


const author0 = buildAuthor(addressesArray[0]);
const offer0 = buildOffer('квартира на Моховой', 'Моховая 12', returnRandomInteger(9000, 55000), 'flat', returnRandomInteger(1, 5),  returnRandomInteger(1, 25), '12:00', '14:00', ['wifi', 'dishwasher'], 'просторная, для 2-х человек', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg');
const locationn0 = buildLocation(returnRandomFloat(35.65000, 35.70000, 2), returnRandomFloat(139.70000, 139.80000, 0));
const advertisment0 = buildAdvertisment(author0, offer0, locationn0);


const author1 = buildAuthor(addressesArray[1]);
const offer1 = buildOffer('квартира на Ветеранов', 'пр.Ветеранов 135', returnRandomInteger(9000, 55000), 'flat', returnRandomInteger(1, 5),  returnRandomInteger(1, 25), '13:00', '14:00', ['wifi', 'washer'], 'можно с питомцами', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg');
const locationn1 = buildLocation(returnRandomFloat(35.65000, 35.70000, 1), returnRandomFloat(139.70000, 139.80000, 1));
const advertisment1 = buildAdvertisment(author1, offer1, locationn1);

const author2 = buildAuthor(addressesArray[2]);
const offer2 = buildOffer('квартира пл. Ленина', 'пл. Ленина 135', returnRandomInteger(9000, 55000), 'flat', returnRandomInteger(1, 5),  returnRandomInteger(1, 25), '13:00', '12:00', ['washer'], 'не подходит для младенцев', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg');
const locationn2 = buildLocation(returnRandomFloat(35.65000, 35.70000, 3), returnRandomFloat(139.70000, 139.80000, 2));
const advertisment2 = buildAdvertisment(author2, offer2, locationn2);

const author3 = buildAuthor(addressesArray[3]);
const offer3 = buildOffer('хостел на Достоевской', 'пр Владимирский, 2', returnRandomInteger(9000, 55000), 'flat', returnRandomInteger(1, 2),  returnRandomInteger(1, 25), '13:00', '12:00', ['washer'], 'в центре Питера, 2 шага до м. Достоевская', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg');
const locationn3 = buildLocation(returnRandomFloat(35.65000, 35.70000, 2), returnRandomFloat(139.70000, 139.80000, 2));
const advertisment3 = buildAdvertisment(author3, offer3, locationn3);

const author4 = buildAuthor(addressesArray[4]);
const offer4 = buildOffer('хостел на Фонтанке', 'наб Фонтанки, 2', returnRandomInteger(9000, 55000), 'hotel', returnRandomInteger(1, 2),  returnRandomInteger(1, 25), '13:00', '12:00', ['washer'], 'в центре Питера, 2 шага до м. Достоевская', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg');
const locationn4 = buildLocation(returnRandomFloat(35.65000, 35.70000, 2), returnRandomFloat(139.70000, 139.80000, 2));
const advertisment4 = buildAdvertisment(author4, offer4, locationn4);

const author5 = buildAuthor(addressesArray[5]);
const offer5 = buildOffer('хостел на Достоевской', 'пр Владимирский, 2', returnRandomInteger(9000, 55000), 'flat', returnRandomInteger(1, 2),  returnRandomInteger(1, 25), '13:00', '12:00', ['washer'], 'в центре Питера, 2 шага до м. Достоевская', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg');
const locationn5 = buildLocation(returnRandomFloat(35.65000, 35.70000, 2), returnRandomFloat(139.70000, 139.80000, 2));
const advertisment5 = buildAdvertisment(author5, offer5, locationn5);

const author6 = buildAuthor(addressesArray[6]);
const offer6 = buildOffer('хостел на Достоевской', 'пр Владимирский, 2', returnRandomInteger(9000, 55000), 'hotel', returnRandomInteger(1, 2),  returnRandomInteger(1, 25), '13:00', '12:00', ['washer'], 'в центре Питера, 2 шага до м. Достоевская', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg');
const locationn6 = buildLocation(returnRandomFloat(35.65000, 35.70000, 2), returnRandomFloat(139.70000, 139.80000, 2));
const advertisment6 = buildAdvertisment(author6, offer6, locationn6);

const author7 = buildAuthor(addressesArray[7]);
const offer7 = buildOffer('хостел на Достоевской', 'пр Владимирский, 2', returnRandomInteger(9000, 55000), 'flat', returnRandomInteger(1, 2),  returnRandomInteger(1, 25), '13:00', '12:00', ['washer'], 'в центре Питера, 2 шага до м. Достоевская', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg');
const locationn7 = buildLocation(returnRandomFloat(35.65000, 35.70000, 2), returnRandomFloat(139.70000, 139.80000, 2));
const advertisment7 = buildAdvertisment(author7, offer7, locationn7);

const author8 = buildAuthor(addressesArray[8]);
const offer8 = buildOffer('хостел на Достоевской', 'пр Владимирский, 2', returnRandomInteger(9000, 55000), 'flat', returnRandomInteger(1, 2),  returnRandomInteger(1, 25), '13:00', '12:00', ['washer'], 'в центре Питера, 2 шага до м. Достоевская', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg');
const locationn8 = buildLocation(returnRandomFloat(35.65000, 35.70000, 2), returnRandomFloat(139.70000, 139.80000, 2));
const advertisment8 = buildAdvertisment(author8, offer8, locationn8);

const author9 = buildAuthor(addressesArray[9]);
const offer9 = buildOffer('хостел на Достоевской', 'пр Владимирский, 2', returnRandomInteger(9000, 55000), 'flat', returnRandomInteger(1, 2),  returnRandomInteger(1, 25), '13:00', '12:00', ['washer'], 'в центре Питера, 2 шага до м. Достоевская', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg');
const locationn9 = buildLocation(returnRandomFloat(35.65000, 35.70000, 2), returnRandomFloat(139.70000, 139.80000, 2));
const advertisment9 = buildAdvertisment(author9, offer9, locationn9);

function createAdvertisementsArray(){
  advertisementsArray.push(advertisment0);
  advertisementsArray.push(advertisment1);
  advertisementsArray.push(advertisment2);
  advertisementsArray.push(advertisment3);
  advertisementsArray.push(advertisment4);
  advertisementsArray.push(advertisment5);
  advertisementsArray.push(advertisment6);
  advertisementsArray.push(advertisment7);
  advertisementsArray.push(advertisment8);
  advertisementsArray.push(advertisment9);

  return advertisementsArray;
}
createAdvertisementsArray();


