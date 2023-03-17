//Components
import Slider from "./Slider.jsx";
//Hook
// import { useState, useEffect } from "react";

export default function PriceFilter({
  updateQyParams,
  priceInitQyParam,
  priceLimitQyParam,
  priceRange,
}) {


  const handleChange = (evt) => {
    console.log(evt.target.value)
    console.log(priceInitQyParam)
    console.log(priceLimitQyParam)
    priceInitQyParam !== evt.target.value[0] && updateQyParams("price_init", evt.target.value[0]);
    priceLimitQyParam !== evt.target.value[1] && updateQyParams("price_limit", evt.target.value[1]);
  };

  const valuetext = (value) => `$${value}`; // slider accessibility
  const stepArs = 1000000;
  return (
    <>
      <span>
        <b>Precio</b>
      </span>
      <div id="priceFilter">
        <Slider
          priceInitQyParam={priceInitQyParam}
          priceLimitQyParam={priceLimitQyParam}
          priceRange={priceRange}
          handleChange={handleChange}
          valuetext={valuetext}
          stepArs={stepArs}
        />
      </div>
    </>
  );
}
