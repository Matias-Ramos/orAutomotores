import ListGroup from "react-bootstrap/ListGroup";
import { improvePriceReadability, returnProperPrice } from "../../../utils/byVarious/priceUtils.js";

const CardListGroup = ({ car }) => {

  return (
    <ListGroup className="mt-2">
      <ListGroup.Item>
        <span>
          <b>
            {car.sellsInDollars ? "U$S" : "$"}{" "}
            {returnProperPrice(car) ? returnProperPrice(car) : '-'}
          </b>
        </span>
        <span>
          <i>
            {car.year || '-'} | {car.km!=null ? improvePriceReadability(car.km) : "-"} Km
          </i>
        </span>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CardListGroup;
