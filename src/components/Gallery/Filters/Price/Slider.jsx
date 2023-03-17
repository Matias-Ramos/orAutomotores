//Components
import { Box, Slider as SliderMui } from "@mui/material";
//Utils
import { improvePriceReadability } from "../../../../utils/byVarious/priceUtils";


const Slider = ({
  scope,
  priceRange,
  handleChange,
  valuetext,
  stepArs,
}) => {

  if (Object.keys(priceRange).length !== 0 && scope.length!==0)
    // renders slider only when variables are set and ready. 
    // Else the element values switches between uncontrolled(undefined) and controlled(sudden value) and throws a console error.
    return (
      <Box sx={{ width: "100%" }}>
        <SliderMui
          getAriaLabel={() => 'Rango de precio'}
          // value={priceQyParam ? parseInt(priceQyParam) : priceRange.maxArs}
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
};

export default Slider;
