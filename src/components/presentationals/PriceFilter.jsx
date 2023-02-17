import { Slider } from '@mui/material';


function PriceFilter() {
    function makePriceReadable(value){
        value = value.toLocaleString().replace(',', '.').replace(',', '.');
        value = '$ '+ value;
        return value;
    }
  return (
    <div>
        <span><b>Precio</b><br /></span>
        <Slider
         aria-label="Precio"
         defaultValue={7000000}
        //  getAriaValueText={valuetext}
         valueLabelDisplay="auto"
         valueLabelFormat={value => <div>{makePriceReadable(value)}</div>}
         step={500000}
         marks
         min={500000}
         max={7000000}
        />
    </div>
  )
}

export default PriceFilter