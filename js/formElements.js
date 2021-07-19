

export
/*const advertisments = createAdvertismentsArray();*/

const title = document.querySelector('.popup__title');

title.setAttribute('minlength',30);
title.setAttribute('maxlength',100);
title.required = true;

const address = document.querySelector('.popup__text--address');
address.setAttribute('minlength',30);
address.readonly = true;

const price = document.querySelector('.popup__text--price');
price.setAttribute('maxlength', 1000000);
price.required = true;
price.setAttribute('type', 'number');


const typeElem = document.querySelector('.popup__type');
if(typeElem.value === 'bungalow'){
  price.setAttribute('minlength', 0);
  price.placeholder = '0';
}

if(typeElem.value === 'flat'){
  price.setAttribute('minlength', 1000);
  price.placeholder = '1000';
}

if(typeElem.value === 'hotel'){
  price.setAttribute('minlength', 3000);
  price.placeholder = '3000';
}

if(typeElem.value === 'house'){
  price.setAttribute('minlength', 5000);
  price.placeholder = '5000';
}

if(typeElem.value === 'palace'){
  price.setAttribute('minlength', 10000);
  price.placeholder = '10000';
}

const timein = document.querySelector('#timein');


const timeout = document.querySelector('#timeout');


