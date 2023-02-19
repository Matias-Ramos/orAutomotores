import PriceFilter from "../presentationals/PriceFilter.jsx"
import KmFilter from "../presentationals/KmFilter.jsx"
import YearsFilter from "../presentationals/YearsFilter.jsx"
// import { useSearchParams } from 'react-router-dom';
// import { useEffect } from "react";




function GaleryFilterContainer() {

  /* Query filters */
  // const [searchParams] = useSearchParams();
  // useEffect(() => {
  //   const currentParams = Object.fromEntries([...searchParams]); //sets param query string into a simple object
  // }, [searchParams]);

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