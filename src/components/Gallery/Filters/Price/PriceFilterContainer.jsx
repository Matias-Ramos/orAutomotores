// Components
import Slider from "./Slider.jsx";
// Hook
import { useState, useEffect } from "react";
// PropTypes
import PropTypes from "prop-types"

export default function PriceFilter({
  updateQyParams,
  priceInitQyParam,
  priceLimitQyParam,
  priceRange,
}) {
  const [scope, setScope] = useState([]);

  // useState setter based on queryParams
  useEffect(() => {
    let result = [];
    priceInitQyParam === null
      ? result.push(priceRange.minArs)
      : result.push(parseInt(priceInitQyParam));
    priceLimitQyParam === null
      ? result.push(priceRange.maxArs)
      : result.push(parseInt(priceLimitQyParam));
    setScope(result);
  }, [priceRange, priceInitQyParam, priceLimitQyParam]);

  const handleChange = (evt) => {
    parseInt(priceInitQyParam) !== evt.target.value[0] &&
      updateQyParams("price_init", evt.target.value[0]);
    parseInt(priceLimitQyParam) !== evt.target.value[1] &&
      updateQyParams("price_limit", evt.target.value[1]);
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
          handleChange={handleChange}
          valuetext={valuetext}
          stepArs={stepArs}
          scope={scope}
          priceRange={priceRange}
        />
      </div>
    </>
  );
}

PriceFilter.propTypes = {
  updateQyParams : PropTypes.func.isRequired,
  priceInitQyParam : PropTypes.string,
  priceLimitQyParam : PropTypes.string,
  priceRange: PropTypes.shape({
    minArs: PropTypes.number,
    maxArs: PropTypes.number,
  }),
}