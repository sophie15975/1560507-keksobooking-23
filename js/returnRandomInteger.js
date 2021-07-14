export function returnRandomInteger(min, max){
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
};
