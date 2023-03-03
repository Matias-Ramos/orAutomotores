//Components
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

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
