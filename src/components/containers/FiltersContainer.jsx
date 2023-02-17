import PriceFilter from "../presentationals/PriceFilter"
import KmFilter from "../presentationals/KmFilter"
import YearsFilter from "../presentationals/YearsFilter"


function GaleryFilterContainer() {
  return (
    <>
    <KmFilter />
    <PriceFilter />
    <YearsFilter />
    </>
  )
}

export default GaleryFilterContainer