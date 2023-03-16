//Components
import { Box, Slider as SliderMui } from "@mui/material";
//Utils
import { getUsdCurrentPrice } from "../../../../utils/byVarious/getUsdCurrentPrice";
import { improvePriceReadability } from "../../../../utils/byVarious/priceUtils";
//Hooks
import { useRef, useEffect } from "react";

const Slider = ({
  priceChosenRange,
  updateQyParams,
  minMaxPrices,
  filterCurrencyOnArs,
}) => {
  const usdValue = useRef();
  useEffect(() => {
    getUsdCurrentPrice().then(
      (pricesObj) => (usdValue.current = pricesObj.blue.value_avg)
    );
  }, []);

  const handleChange = (evt) => {
    let sliderPrice = null;
    filterCurrencyOnArs
      ? (sliderPrice = evt.target.value)
      : (sliderPrice =
          Math.ceil((evt.target.value * usdValue.current) / 1000000) * 1000000);

    updateQyParams("price", sliderPrice);
  };

  const valuetext = (value) => `$${value}`; // slider accessibility
  const stepArs = 1000000;
  const stepUsd = 2000;

  if (minMaxPrices.length !== 0)
    // renders slider only when minMaxPrices values are received. Else the element switches between uncontrolled(undefined) and controlled(sudden value) and throws a console error.
    return (
      <Box sx={{ width: "100%" }}>
        <SliderMui
          aria-label="Precio"
          value={priceChosenRange ? priceChosenRange : minMaxPrices.maxUsd}
          getAriaValueText={valuetext}
          valueLabelFormat={(value) => (
            <div> {improvePriceReadability(value)} </div>
          )}
          valueLabelDisplay="auto"
          onChange={handleChange}
          step={filterCurrencyOnArs ? stepArs : stepUsd}
          marks
          min={filterCurrencyOnArs ? minMaxPrices.minArs : minMaxPrices.minUsd}
          max={filterCurrencyOnArs ? minMaxPrices.maxArs : minMaxPrices.maxUsd}
        />
      </Box>
    );
};

export default Slider;
