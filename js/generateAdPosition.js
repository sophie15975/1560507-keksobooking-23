import {createAdvertismentsArray} from './createAdvertismentsArray.js';
import {makeElement}  from './makeElement.js';
import {hideIftextContentEmpty} from './hideIftextContentEmpty.js';

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
    hideIftextContentEmpty(title);

    const address = makeElement('div', 'popup__text--address');
    address.textContent = advertisments[index].offer.address;
    article.appendChild(address);
    hideIftextContentEmpty(address);

    const price = makeElement('div','popup__text--price');
    price.textContent = `${advertisments[index].offer.price} ₽/ночь`;
    article.appendChild(price);
    hideIftextContentEmpty(price);

    const typeElem =  makeElement('h4', 'popup__type');
    const type =  advertisments[index].offer.type;

    switch (type) {
      case 'flat':
        typeElem.textContent = 'Квартира';
        break;
      case 'bungalow':
        typeElem.textContent = 'Бунгало';
        break;
      case  'house':
        typeElem.textContent = 'Дом';
        break;
      case  'palace':
        typeElem.textContent = 'Дворец';
        break;
      case 'hotel':
        typeElem.textContent = 'Отель';
        break;

    }

    article.appendChild(typeElem);
    hideIftextContentEmpty(typeElem);

    const roomInfo = makeElement('p','popup__text--capacity');
    roomInfo.textContent = `${advertisments[index].offer.rooms} комнаты для ${advertisments[index].offer.guests} гостей`;
    article.appendChild(roomInfo);
    hideIftextContentEmpty(roomInfo);

    const timeElem = makeElement('p', 'popup__text--time');
    const time = `Заезд после ${advertisments[index].offer.checkin}, выезд до ${advertisments[index].offer.checkout}`;
    timeElem.textContent = time;
    article.appendChild(timeElem);
    hideIftextContentEmpty(timeElem);

    const featureElem = makeElement('ul', 'popup__features');
    const features = advertisments[index].offer.features;
    for (let iterator = 0; iterator < features.length; iterator++){
      const liElem = makeElement('li', 'popup__feature');
      featureElem.appendChild(liElem);
      liElem.textContent = features[iterator];
    }
    article.appendChild(featureElem);
    hideIftextContentEmpty(featureElem);

    const description = makeElement('p', 'popup__description');
    description.textContent = advertisments[index].offer.description;
    hideIftextContentEmpty(description);
    article.appendChild(description);

    const photosElem = makeElement('div', 'popup__photos');
    const photos = advertisments[index].offer.photos;
    for (let iterator = 0; iterator < photos.length; iterator++){
      const image = makeElement('img', 'popup__photo');
      image.src = photos[iterator];
      photosElem.appendChild(image);
    }
    article.appendChild(photosElem);
    adPositionsArray.push(article);
  }
  return adPositionsArray;
}
