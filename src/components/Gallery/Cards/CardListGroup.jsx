import ListGroup from "react-bootstrap/ListGroup";

const CardListGroup = ({ car }) => {
  const makeValueReadable = (value) => value.toLocaleString().replace(",", ".").replace(",", ".");

  function returnProperPrice(car){
    let result = null;
    switch(car.sellsInDollars){
      case true:
        result = makeValueReadable(car.priceUsd);
        break;
      case false:
        result =  makeValueReadable(car.priceArs);
        break;
      default:
        result = '-'
        break;
    }
    return result;
  }
  return (
    <ListGroup className="mt-2">
      <ListGroup.Item>
        <span>
          <b>
            {car.sellsInDollars ? "U$S" : "$"}{" "}
            {returnProperPrice(car)}
          </b>
        </span>
        <span>
          <i>
            {car.year || '-'} | {car.km!=null ? makeValueReadable(car.km) : "-"} Km
          </i>
        </span>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CardListGroup;
