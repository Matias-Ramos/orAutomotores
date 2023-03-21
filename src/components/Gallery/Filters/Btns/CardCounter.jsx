import PropTypes from "prop-types";

const CardCounter = ({ qtyOfCars }) => (
  <div className="filterBtn">Vehículos: {qtyOfCars}</div>
);

CardCounter.propTypes = {
  qtyOfCars: PropTypes.number.isRequired,
};

export default CardCounter;
