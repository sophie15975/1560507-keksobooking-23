
function returnRandomInteger(min, max){
  min = Math.abs(min);
  max = Math.abs(max);
  const randomInt = min + Math.random() * (max - min);

  if (min < max) {
    return Math.round(randomInt);
  } else if (min === max){
    return ('твой диапазон вовсе не диапазон :))');
  } else {
    return 0;
  }
}

returnRandomInteger(3, 10);


function returnRandomFloat(min, max){
  min = Math.abs(min);
  max = Math.abs(max);
  const randomFloat = min + Math.random() * (max - min);

  if (min < max) {
    return randomFloat;
  } else if (min === max){
    return('твой диапазон вовсе не диапазон, стоит ли поправить ситуацию');
  } else {
    return 0;
  }
}


returnRandomFloat(3, 10);
