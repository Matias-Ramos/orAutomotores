//Components
import Slider from "./Slider.jsx";
//Hook
import { useState, useEffect } from "react";

export default function PriceFilter({
  updateQyParams,
  priceInitQyParam,
  priceLimitQyParam,
  priceRange,
}) {

  const [scope, setScope] = useState([]);

  useEffect(() => {
    if (
      priceInitQyParam === null &&
      priceLimitQyParam === null &&
      Object.keys(priceRange).length !== 0
    ) {
      console.log('entró el useEffect')
      setScope([priceRange.minArs, priceRange.maxArs]);
    }
  }, []);

  
  

  const handleChange = (evt) => {
    updateQyParams("price_init", evt.target.value[0]);
    updateQyParams("price_limit", evt.target.value[1]);
    setScope(evt.target.value)
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
          scope={scope}
          priceRange={priceRange}
          handleChange={handleChange}
          valuetext={valuetext}
          stepArs={stepArs}
        />
      </div>
    </>
  );
}
