import Button from "react-bootstrap/Button";

const FilterCleaner = ({ deleteQyParams }) => (
  <Button variant="secondary" className="filterBtn" onClick={deleteQyParams}>
    Borrar filtros
  </Button>
);

export default FilterCleaner;
