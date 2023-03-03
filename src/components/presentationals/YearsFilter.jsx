// Components
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export default function YearsFilter(props) {

  const handleChange = (evt) => {
    const queryParamName = props.type === "Desde" ? "from" : "up_to";
    props.updateQyParams(queryParamName, evt.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className="yearsFilter">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">{props.type}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.yearChosenRange ? props.yearChosenRange : ''}
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
