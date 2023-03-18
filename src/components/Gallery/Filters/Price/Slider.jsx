//Components
import { Box, Slider as SliderMui } from "@mui/material";
//Utils
import { improvePriceReadability } from "../../../../utils/byVarious/priceUtils";

const Slider = ({ handleChange, valuetext, stepArs, priceRange, scope }) => (
  <Box sx={{ width: "100%" }}>
    <SliderMui
      getAriaLabel={() => "Rango de precio"}
      value={scope}
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

export default Slider;
