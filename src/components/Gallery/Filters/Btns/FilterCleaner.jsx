// // Component
import Button from "react-bootstrap/Button";
// PropTypes
import PropTypes from "prop-types";

const FilterCleaner = ({ deleteQyParams }) => (
  <Button variant="secondary" className="filterBtn" onClick={deleteQyParams}>
    Borrar filtros
  </Button>
);

FilterCleaner.propTypes = {
  deleteQyParams: PropTypes.func.isRequired,
};

export default FilterCleaner;
