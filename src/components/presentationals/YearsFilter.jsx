import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function YearsFilter() {
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <span><b>Año</b><br /></span>
        <TextField id="outlined-basic" label="Desde" variant="outlined" />
        <TextField id="outlined-basic" label="Hasta" variant="outlined" />
      </Box>
    );
  }
  