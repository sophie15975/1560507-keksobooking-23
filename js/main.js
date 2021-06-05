
function returnRandomInteger(min, max){
  min = Math.abs(min);
  max = Math.abs(max);
  let int = min  + Math.random() * (max - min);

  if (min < max) {
    return Math.round(int);

  } else if (min == max){
    alert("твой диапазон вовсе не диапазон :))");
  }
  else return 0;

}

alert(returnRandomInteger(3, 10));


function returnRandomFloat(min, max){
  min = Math.abs(min);
  max = Math.abs(max);
  let float = min  + Math.random() * (max - min);
  if (min < max) {
    return float;

  } else if (min == max){
    alert("твой диапазон вовсе не диапазон, стоит ли поправить ситуацию");
  }
  else return 0;

}


alert(returnRandomFloat(3, 10));
