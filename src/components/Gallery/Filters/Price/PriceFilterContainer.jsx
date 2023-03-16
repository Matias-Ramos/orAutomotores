//Components
import Slider from "./Slider.jsx";

export default function PriceFilter({
  updateQyParams,
  priceQyParam,
  priceRange,
}) {
  const handleChange = (evt) => updateQyParams("price", evt.target.value) ;
  const valuetext = (value) => `$${value}`; // slider accessibility
  const stepArs = 1000000;
  return (
    <>
      <span>
        <b>Precio</b>
      </span>
      <div id="priceFilter">
        <Slider
          priceQyParam={parseInt(priceQyParam)}
          priceRange={priceRange}
          handleChange={handleChange}
          valuetext={valuetext}
          stepArs={stepArs}
        />
      </div>
    </>
  );
}
