//Components
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function PriceFilter(props) {
  const handleChange = (evt) => {
    props.updateQyParams("price", evt.target.value);
  };
  //accessibility
  function valuetext(value) {
    return `$${value}`;
  }
  return (
    <div>
      <span>
        <b>Precio</b>
        <br />
      </span>
      <Box sx={{ width: "100%" }}>
        <Slider
          aria-label="Precio"
          value={props.priceChosenRange ? parseInt(props.priceChosenRange) : props.highestValue}
          getAriaValueText={valuetext}
          valueLabelFormat={(value) => (
            <div> {props.makePriceReadable(value)} </div>
          )}
          valueLabelDisplay="auto"
          onChange={handleChange}
          step={props.lowestValue}
          marks
          min={props.lowestValue}
          max={props.highestValue}
        />
      </Box>
    </div>
  );
}
