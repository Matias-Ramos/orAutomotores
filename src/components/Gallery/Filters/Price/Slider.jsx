import { Box, Slider as SliderMui } from "@mui/material";
import { improvePriceReadability } from "../../../../utils/byVarious/priceUtils";

const Slider = ({
  priceChosenRange,
  updateQyParams,
  minMaxPrices,
  filterCurrencyOnArs,
}) => {
  const valuetext = (value) => `$${value}`; //accessibility
  const handleChange = (evt) => updateQyParams("price", evt.target.value);

  const stepArs = 1000000
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
          step={filterCurrencyOnArs? stepArs : stepUsd}
          marks
          min={filterCurrencyOnArs? minMaxPrices.minArs:minMaxPrices.minUsd}
          max={filterCurrencyOnArs? minMaxPrices.maxArs:minMaxPrices.maxUsd}
        />
      </Box>
    );
};

export default Slider;
