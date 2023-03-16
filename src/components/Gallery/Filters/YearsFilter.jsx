// MaterialUi
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
// Utils
import carPossibleYears from "../../../utils/byFilters/yearsUtils.js";

export default function YearsFilter({
  updateQyParams,
  type,
  yearChosenRange,
}) {
  const handleChange = (evt) => {
    const queryParamName = type === "Desde" ? "from" : "up_to";
    updateQyParams(queryParamName, evt.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className="yearsFilter">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">{type}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={yearChosenRange ? yearChosenRange : ""}
          label="Año"
          onChange={handleChange}
        >
          {carPossibleYears.map((slctYear) => (
            <MenuItem key={slctYear} value={slctYear}>
              {slctYear}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
