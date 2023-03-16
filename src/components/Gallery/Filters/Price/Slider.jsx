//Components
import { Box, Slider as SliderMui } from "@mui/material";
//Utils
import { improvePriceReadability } from "../../../../utils/byVarious/priceUtils";

const Slider = ({
  priceQyParam,
  priceRange,
  handleChange,
  valuetext,
  stepArs,
}) => {
  if (Object.keys(priceRange).length !== 0)
    // renders slider only when priceRange values are set. 
    // Else the element values switches between uncontrolled(undefined) and controlled(sudden value) and throws a console error.
    return (
      <Box sx={{ width: "100%" }}>
        <SliderMui
          aria-label="Precio"
          value={priceQyParam ? parseInt(priceQyParam) : priceRange.maxArs}
          getAriaValueText={valuetext}
          valueLabelFormat={(value) => (
            <div> {improvePriceReadability(value)} </div>
          )}
          valueLabelDisplay="auto"
          onChange={handleChange}
          step={stepArs}
          marks
          min={priceRange.minArs}
          max={priceRange.maxArs}
        />
      </Box>
    );
};

export default Slider;
