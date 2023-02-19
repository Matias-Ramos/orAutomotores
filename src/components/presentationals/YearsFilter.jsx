// Components
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// Hook
import { useState } from "react";

export default function YearsFilter(props) {
  const [year, setYear] = useState("");

  const handleChange = (evt) => {
    setYear(evt.target.value);
    const queryParamName = props.type === "Desde" ? "from" : "up_to";
    props.updateQyParams(queryParamName, evt.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">{props.type}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Año"
          onChange={handleChange}
        >
          {props.carPossibleYears.map((slctYear) => (
            <MenuItem key={slctYear} value={slctYear}>
              {slctYear}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
