// Components
import CardCounter from "./CardCounter.jsx";
import FilterCleaner from "./FilterCleaner.jsx";
// Hook
import { useContext } from "react";
// Context
import { queryCtxt } from "../../../../context/QyParamsCtxt";
// PropTypes
import PropTypes from "prop-types"

const FilterBottomBtns = ({ qtyOfCars }) => {
  const { deleteQyParams } = useContext(queryCtxt);
  return (
    <>
    <div id="filterBottomBtns">
      <FilterCleaner deleteQyParams={deleteQyParams} />
      <CardCounter qtyOfCars={qtyOfCars} />
    </div>
    </>
  );
};

FilterBottomBtns.propTypes = { 
  qtyOfCars : PropTypes.number.isRequired
}

export default FilterBottomBtns;
