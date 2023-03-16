// This util is used by various components.

const highestValue = 7000000;
const lowestValue = 500000;

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

export { highestValue, lowestValue, improvePriceReadability, returnProperPrice };
