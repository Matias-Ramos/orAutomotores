// MaterialUi
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
// Utils
import carPossibleYears from "../../../../utils/byFilters/yearsUtils.js";
// PropTypes
import PropTypes from "prop-types"

export default function YearsFilter({
  updateQyParams,
  type,
  yearQyParam,
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
          value={yearQyParam ? yearQyParam : ""}
          label="Año"
          onChange={handleChange}
        >
          {carPossibleYears.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

YearsFilter.propTypes = {
  updateQyParams : PropTypes.func.isRequired,
  type : PropTypes.string.isRequired,
  yearQyParam : PropTypes.string,
}
