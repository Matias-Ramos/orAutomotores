// Components
import { Box, Slider as SliderMui } from "@mui/material";
// Utils
import { improvePriceReadability } from "../../../../utils/byVarious/priceUtils";
// PropTypes
import PropTypes from "prop-types";

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

Slider.propTypes = {
  handleChange: PropTypes.func.isRequired,
  valuetext: PropTypes.func.isRequired,
  stepArs: PropTypes.number.isRequired,
  scope: PropTypes.arrayOf(PropTypes.number),
  priceRange: PropTypes.shape({
    minArs: PropTypes.number,
    maxArs: PropTypes.number,
  }),
};

export default Slider;
