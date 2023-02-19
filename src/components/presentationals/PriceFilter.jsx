import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useSearchParams } from "react-router-dom";

function makePriceReadable(value) {
  value = value.toLocaleString().replace(",", ".").replace(",", ".");
  value = "$ " + value;
  return value;
}

export default function PriceFilter() {
  const highestValue = 7000000;
  const lowestValue = 500000;

  const [params, setParams] = useSearchParams();
  const handleChange = (_event, newValue) => {
    params.set("price", newValue);
    setParams(params);
  };

  return (
    <div>
      <span>
        <b>Precio</b>
        <br />
      </span>
      <Box sx={{ width: "100%" }}>
        <Slider
          aria-label="Precio"
          defaultValue={highestValue}
          getAriaValueText={makePriceReadable}
          valueLabelFormat={ value => <div> {makePriceReadable(value)} </div>}
          valueLabelDisplay="auto"
          onChange={handleChange}
          step={lowestValue}
          marks
          min={lowestValue}
          max={highestValue}
        />
      </Box>
    </div>
  );
}
