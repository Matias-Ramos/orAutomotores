//Components
import CurrencySwitch from "./CurrencySwitch.jsx";
import Slider from "./Slider.jsx";
// Hook
import { useState } from "react";

export default function PriceFilter({
  updateQyParams,
  priceChosenRange,
  minMaxPrices,
}) {
  const [filterCurrencyOnArs, setCurrencyArs] = useState(true);

  return (
    <>
      <div id="priceSpans">
        <span>
          <b>Precio</b>
        </span>
        <CurrencySwitch setCurrencyArs={setCurrencyArs} />
      </div>
      <div id="priceFilter">
        <Slider
          priceChosenRange={parseInt(priceChosenRange)}
          updateQyParams={updateQyParams}
          minMaxPrices={minMaxPrices}
          filterCurrencyOnArs={filterCurrencyOnArs}
        />
      </div>
    </>
  );
}
