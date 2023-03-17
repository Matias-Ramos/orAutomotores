import filterByKm from "./filterByKm.js";

const filterData = (query, svCarList) => {
  let array = JSON.parse(JSON.stringify(svCarList));
  query.forEach((filterValue, filterKey) => {
    switch (filterKey) {
      case "from":
        array = array.filter(
          (car) => car.year >= filterValue || car.year == null
        );
        break;
      case "up_to":
        array = array.filter(
          (car) => car.year <= filterValue || car.year == null
        );
        break;
      case "price_init":
        array = array.filter(
          (car) => (car.priceArs >= filterValue) || car.priceArs == null
        );
        break;
      case "price_limit":
        array = array.filter(
          (car) => (car.priceArs <= filterValue) || car.priceArs == null
        );
        break;
      case "km":
        array = filterByKm(filterValue, array);
        break;
      default:
        throw new Error(`The filter value un the URLqueryParams is not the expected (from/up_to/price/km). 
          Please check GalleryContainer.jsx => filterData() mthd.`);
    }
  });
  return array;
};

export {filterData}