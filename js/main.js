function returnRandomInteger(min, max){
  if (min < 0) {
    return 'min не может быть меньше 0';
  }
  min = Math.abs(min);
  max = Math.abs(max);
  const randomInt = min + Math.random() * (max - min);

  if (min < max) {
    return Math.round(randomInt);
  } else if ((min === max) || (min > max)){
    return 'max должен быть больше, чем min';
  }
}

returnRandomInteger(3, 10);

function returnRandomFloat(min, max){
  if (min < 0) {
    return 'min не может быть меньше 0';
  }
  min = Math.abs(min);
  max = Math.abs(max);
  const randomFloat = min + Math.random() * (max - min);

  if (min < max) {
    return randomFloat;
  } else if (min === max){
    return 'твой диапазон вовсе не диапазон, стоит ли поправить ситуацию';
  }
}

returnRandomFloat(3, 10);
