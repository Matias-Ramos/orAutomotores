import { getUsdCurrentPrice } from "../byVarious/getUsdCurrentPrice";
let USDpriceToday = null;
getUsdCurrentPrice().then((value) => (USDpriceToday = value));

function declareDataTypes(car) {
  // The user may not complete all of the fields. Some properties of the car may be empty.
  // console.log(`car["price"] is ${car["price"]} and this is parsed: ${parseInt(car["price"])}`)
  car["price"] = parseInt(car["price"]) || null;
  car["year"] = parseInt(car["year"]) || null;
  car["km"] = car["km"] !== "" ? parseInt(car["km"]) : null; // no nulling coalescing due to 0km possibility.
  car["title"] = String(car["title"]) || null;
  car["img"] = String(car["img"]) || null;
  car["url"] = String(car["url"]) || null;
  return car;
}

function modelStockData(stock) {
  const formattedStock = stock.map((car) => {
    car = declareDataTypes(car);
    switch (true) {
      // I assume price < 500.000 ? dollars : pesos
      case (Number.isInteger(car.price) && car.price < 500000):
        car["sellsInDollars"] = true;
        car["priceArs"] = car.price * USDpriceToday;
        car["priceUsd"] = car.price;
        break;
      case (Number.isInteger(car.price) && car.price > 500000):
        car["sellsInDollars"] = false;
        car["priceArs"] = car.price;
        car["priceUsd"] = Math.round(car.price / USDpriceToday);
        break;
      default:
        car["sellsInDollars"] = null;
        car["priceArs"] = null;
        car["priceUsd"] = null;
        break;
    }
    delete car["price"];
    return car;
  });
  return formattedStock;
}

export { modelStockData };
