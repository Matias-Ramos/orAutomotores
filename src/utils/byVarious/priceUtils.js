function improvePriceReadability(value) {
  value = value.toLocaleString().replace(",", ".").replace(",", ".");
  return value;
}

function returnProperPrice(car){
  let result = null;
  switch(car.sellsInDollars){
    case true:
      result = improvePriceReadability(car.priceUsd);
      break;
    case false:
      result =  improvePriceReadability(car.priceArs);
      break;
    default:
      break;
  }
  return result;
}

export { improvePriceReadability, returnProperPrice };
