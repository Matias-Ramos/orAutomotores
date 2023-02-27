// Components
import CardCounter from "../presentationals/CardCounter.jsx";
import FilterCleaner from "../presentationals/FilterCleaner.jsx";
// Hook
import { useContext } from "react";
// Context
import { queryCtxt } from "../../context/QyParamsCtxt";

function FilterBottomBtns({ qtyOfCars }) {
  const { deleteQyParams } = useContext(queryCtxt);
  return (
    <div id="filterBottomBtns">
      <FilterCleaner deleteQyParams={deleteQyParams} />
      <CardCounter qtyOfCars={qtyOfCars} />
    </div>
  );
}

export default FilterBottomBtns;
