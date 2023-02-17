import PriceFilter from "../presentationals/PriceFilter"
import KmFilter from "../presentationals/KmFilter"
import YearsFilter from "../presentationals/YearsFilter"


function GaleryFilterContainer() {
  return (
    <div id="filtersContainer">
      <KmFilter />
      <PriceFilter />
      <span><b>Año</b><br /></span>
      <YearsFilter type="Desde" />
      <YearsFilter type="Hasta" />
    </div>
  )
}

export default GaleryFilterContainer