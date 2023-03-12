function filterByKm(rangeKm, arrayOfCars) {
  let result = [];
  switch (rangeKm) {
    // it returns values that matches the statement and values that have no value (null)
    case "0":
      result = arrayOfCars.filter((car) => (car.km === 0) || car.km == null);
      break;
    case "0_to_100":
      result = arrayOfCars.filter(
        (car) => ((car.km > 0 && parseInt(car.km) <= 100000) || car.km == null)
      );
      break;
    case "100_plus":
      result = arrayOfCars.filter((car) => (car.km > 100000) || car.km == null);
      break;
    case "any":
      result = arrayOfCars.filter((car) => (car.km >= 0) || car.km == null);
      break;
    default:
      throw new Error(`Cannot filter by Km. $rangeKm value is: ${rangeKm}.\n
            Check the range is contemplated in the filterByKm function`);
  }
  return result;
}
export default filterByKm;
