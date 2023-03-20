import ListGroup from "react-bootstrap/ListGroup";
import { improvePriceReadability, returnProperPrice } from "../../../utils/byVarious/priceUtils.js";
// PropTypes
import PropTypes from "prop-types"

const CardListGroup = ({ car }) => {
  return (
    <ListGroup className="mt-2">
      <ListGroup.Item>
        <span>
          <b>
            {car.sellsInDollars ? "U$S" : "$"}{" "}
            {returnProperPrice(car) ? returnProperPrice(car) : "-"}
          </b>
        </span>
        <span>
          <i>
            {car.year || "-"} | {car.km!=null ? improvePriceReadability(car.km) : "-"} Km
          </i>
        </span>
      </ListGroup.Item>
    </ListGroup>
  );
};

CardListGroup.propTypes = {
  car: PropTypes.shape({
    year: PropTypes.number,
    km: PropTypes.number,
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    url: PropTypes.string,
    priceArs: PropTypes.number,
    priceUsd: PropTypes.number,
    sellsInDollars: PropTypes.bool,
  }),
};
export default CardListGroup;
