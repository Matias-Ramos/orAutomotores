const highestValue = 7000000;
const lowestValue = 500000;
function makePriceReadable(value) {
  value = value.toLocaleString().replace(",", ".").replace(",", ".");
  value = "$ " + value;
  return value;
}

export {highestValue, lowestValue, makePriceReadable};