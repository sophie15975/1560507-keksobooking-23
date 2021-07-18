import {createAdvertismentsArray} from './createAdvertismentsArray.js';
import {makeElement}  from './makeElement.js';

const advertisments = createAdvertismentsArray();

export function generateAdPosition(){
  const adPositionsArray = [];
  for (let index = 0; index < advertisments.length; index++){
    const article = makeElement('article', 'popup');

    const avatar = makeElement('img','popup__avatar');
    avatar.src = advertisments[index].author.avatar;
    article.appendChild(avatar);


    const title = makeElement('h3', 'popup__title');
    title.textContent = advertisments[index].offer.title;
    article.appendChild(title);
    if(title.textContent === null){
      title.style.display ='none';
    }

    const address = makeElement('div', 'popup__text--address');
    address.textContent = advertisments[index].offer.address;
    article.appendChild(address);
    if(address.textContent === null){
      address.style.display ='none';
    }

    const price = makeElement('div','popup__text--price');
    price.textContent = `${advertisments[index].offer.price} ₽/ночь`;
    article.appendChild(price);
    if(price.textContent === null){
      price.style.display ='none';
    }

    const typeElem =  makeElement('h4', 'popup__type');
    const type =  advertisments[index].offer.type;
    if(type === 'flat'){
      typeElem.textContent = 'Квартира';
    }
    if(type === 'bungalow'){
      typeElem.textContent = 'Бунгало';
    }
    if(type === 'house'){
      typeElem.textContent = 'Дом';
    }
    if(type === 'palace'){
      typeElem.textContent = 'Дворец';
    }
    if(type === 'hotel'){
      typeElem.textContent = 'Отель';
    }
    article.appendChild(typeElem);
    if(typeElem.textContent === null){
      typeElem.style.display ='none';
    }

    const roomInfo = makeElement('p','popup__text--capacity');
    roomInfo.textContent = `${advertisments[index].offer.rooms} комнаты для ${advertisments[index].offer.guests} гостей`;
    article.appendChild(roomInfo);
    if(roomInfo.textContent === null){
      roomInfo.style.display ='none';
    }

    const timeElem = makeElement('p', 'popup__text--time');
    const time = `Заезд после ${advertisments[index].offer.checkin}, выезд до ${advertisments[index].offer.checkout}`;
    timeElem.textContent = time;
    article.appendChild(timeElem);
    if(timeElem.textContent === null){
      timeElem.style.display ='none';
    }

    const featureElem = makeElement('ul', 'popup__features');
    const features = advertisments[index].offer.features;
    for (let iks = 0; iks < features.length; iks++){
      const liElem = makeElement('li', 'popup__feature');
      featureElem.appendChild(liElem);
      liElem.textContent = features[iks];
    }
    article.appendChild(featureElem);
    if(featureElem.textContent === null){
      featureElem.style.display ='none';
    }

    const description = makeElement('p', 'popup__description');
    description.textContent = advertisments[index].offer.description;
    console.log(description.textContent);
    if(description.textContent === null){
      description.style.display ='none';
    }
    article.appendChild(description);


    /*const description = makeElement('p', 'popup__description');
    if (advertisments[index].offer.description){
      description.textContent = advertisments[index].offer.description;
      article.appendChild(description);
    }
    else{
      description.style.display ='none';
    } */

    const photosElem = makeElement('div', 'popup__photos');
    const photos = advertisments[index].offer.photos;
    for (let igrik = 0; igrik < photos.length; igrik++){
      const image = makeElement('img', 'popup__photo');
      image.src = photos[igrik];
      photosElem.appendChild(image);
    }
    article.appendChild(photosElem);
    adPositionsArray.push(article);
  }
  return adPositionsArray;
}
