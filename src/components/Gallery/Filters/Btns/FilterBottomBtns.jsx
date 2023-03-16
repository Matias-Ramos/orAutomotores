// Components
import CardCounter from "./CardCounter.jsx";
import FilterCleaner from "./FilterCleaner.jsx";
// Hook
import { useContext } from "react";
// Context
import { queryCtxt } from "../../../../context/QyParamsCtxt";

const FilterBottomBtns = ({ qtyOfCars }) => {
  const { deleteQyParams } = useContext(queryCtxt);
  return (
    <div id="filterBottomBtns">
      <FilterCleaner deleteQyParams={deleteQyParams} />
      <CardCounter qtyOfCars={qtyOfCars} />
    </div>
  );
};

export default FilterBottomBtns;
