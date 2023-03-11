//Components
import { Box, Slider } from "@mui/material";

export default function PriceFilter({
  updateQyParams,
  priceChosenRange,
  highestValue,
  lowestValue,
  makePriceReadable,
}) {
  const handleChange = (evt) => {
    updateQyParams("price", evt.target.value);
  };
  //accessibility
  function valuetext(value) {
    return `$${value}`;
  }
  return (
    <>
      <span>
        <b>Precio</b>
      </span>
      <div id="priceFilter">
        <Box sx={{ width: "100%" }}>
          <Slider
            disabled
            aria-label="Precio"
            value={priceChosenRange ? parseInt(priceChosenRange) : highestValue}
            getAriaValueText={valuetext}
            valueLabelFormat={(value) => (
              <div> {makePriceReadable(value)} </div>
            )}
            valueLabelDisplay="auto"
            onChange={handleChange}
            step={lowestValue}
            marks
            min={lowestValue}
            max={highestValue}
          />
        </Box>
      </div>
    </>
  );
}
