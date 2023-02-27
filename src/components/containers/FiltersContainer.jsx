// Hook
import { useContext } from "react";
// Context
import { queryCtxt } from "../../context/QyParamsCtxt";
// Components
import PriceFilter from "../presentationals/PriceFilter.jsx";
import KmFilter from "../presentationals/KmFilter.jsx";
import YearsFilter from "../presentationals/YearsFilter.jsx";


function FiltersContainer() {
  const { updateQyParams, params } = useContext(queryCtxt);

  // Price matters
  const highestValue = 7000000;
  const lowestValue = 500000;
  function makePriceReadable(value) {
    value = value.toLocaleString().replace(",", ".").replace(",", ".");
    value = "$ " + value;
    return value;
  }

  // Years matters
  let carPossibleYears = [];
  for (let i = new Date().getFullYear(); i >= 1980; i--) {
    carPossibleYears.push(i);
  }

  return (
    <div id="filtersInnerContainer">
      <KmFilter 
        updateQyParams={updateQyParams} 
        kmChosenRange={params.get('km')}
        />
      <PriceFilter
        updateQyParams={updateQyParams}
        makePriceReadable={makePriceReadable}
        highestValue={highestValue}
        lowestValue={lowestValue}
        priceChosenRange={params.get('price')}
      />
      <span>
        <b>Año</b>
        <br />
      </span>
      <YearsFilter
        type="Desde"
        updateQyParams={updateQyParams}
        carPossibleYears={carPossibleYears}
        yearChosenRange={params.get('from')}
      />
      <YearsFilter
        type="Hasta"
        updateQyParams={updateQyParams}
        carPossibleYears={carPossibleYears}
        yearChosenRange={params.get('up_to')}
      />
    </div>
  );
}

export default FiltersContainer;
