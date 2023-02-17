import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function YearsFilter({type}) {
  
  const [year, setYear] = React.useState('');
  const handleChange = (event) => {
    setYear(event.target.value);
  };

  let carPossibleYears = []
  for(let i = new Date().getFullYear(); i >= 1980; i--) {
    carPossibleYears.push(i)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">{type}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Año"
          onChange={handleChange}
        >
          {
            carPossibleYears.map( slctYear => 
             <MenuItem key={slctYear} value={slctYear}>{slctYear}</MenuItem> )
          }
        </Select>
      </FormControl>
    </Box>
  );
}
