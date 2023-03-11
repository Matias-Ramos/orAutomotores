// Components
import CardsMapper from "./Cards/CardsMapper.jsx";
import NoCars from "./Cards/NoCars.jsx";
import FiltersContainer from "./Filters/FiltersContainer.jsx";
// Context
import { QyParamsCtxtProvider } from "../../context/QyParamsCtxt.jsx";
// Hooks
import { useState, useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
// Utils
import filterByKm from "../../utils/Filters/FilterUtils.js";
// Data
import { getItems } from "../../firebase/firestoreDataMgmt.js";

function GalleryContainer() {
  const [stock, setStock] = useState([]);
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  let localData = useRef([])

  useEffect(()=>{
    const getSvData = async () => {
      localData.current = await getItems();
    }
    getSvData()
  },[])
  

  //refreshes the stock based on query params update
  useEffect(() => {
    const fetchData = async () => {
      const arrayOfCars = JSON.parse(JSON.stringify(localData.current));
      setStock(arrayOfCars); //brings an unfiltered list on every queryparam update
      filterData(); //then filters based on query params
    };

    const filterData = () => {
      query.forEach((filterValue, filterKey) => {
        switch (filterKey) {
          case "from":
            setStock((arrayOfCars) =>
              arrayOfCars.filter((car) => car.year >= parseInt(filterValue))
            );
            break;
          case "up_to":
            setStock((arrayOfCars) =>
              arrayOfCars.filter((car) => car.year <= parseInt(filterValue))
            );
            break;
          case "price":
            setStock((arrayOfCars) =>
              arrayOfCars.filter((car) => car.price <= parseInt(filterValue))
            );
            break;
          case "km":
            setStock((arrayOfCars) => filterByKm(filterValue, arrayOfCars));
            break;
          default:
            throw new Error(`The filter value un the URLqueryParams is not the expected (from/up_to/price/km). 
            Please check GalleryContainer.jsx => filterData() mthd.`);
        }
      });
    };

    fetchData();
  }, [query]);

  return (
    <main id="gallerySection">
      <QyParamsCtxtProvider>
        <FiltersContainer qtyOfCars={stock.length} />
      </QyParamsCtxtProvider>
      {stock.length === 0 ? <NoCars /> : <CardsMapper stock={stock} />}
    </main>
  );
}

export default GalleryContainer;
