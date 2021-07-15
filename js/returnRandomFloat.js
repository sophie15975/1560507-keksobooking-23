export function returnRandomFloat(min, max, signAfterComma){
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
