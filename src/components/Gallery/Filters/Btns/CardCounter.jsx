import PropTypes from "prop-types";

const CardCounter = ({ qtyOfCars }) => (
  <div className="filterBtn">Resultados: {qtyOfCars}</div>
);

CardCounter.propTypes = {
  qtyOfCars: PropTypes.number.isRequired,
};

export default CardCounter;
