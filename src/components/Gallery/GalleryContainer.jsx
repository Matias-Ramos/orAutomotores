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
import { getSvCarList } from "../../firebase/firestoreDataMgmt.js";

function GalleryContainer() {
  let svCarList = useRef([]);
  const [stock, setStock] = useState([]);
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);

  //refreshes the stock based on query params update
  useEffect(() => {
    const updateStockState = async () => {
      svCarList.current.length === 0 && (svCarList.current = await getSvCarList());
      const array = filterData();
      setStock(array);
    };

    const filterData = () => {
      let array = JSON.parse(JSON.stringify(svCarList.current));
      query.forEach((filterValue, filterKey) => {
        switch (filterKey) {
          case "from":
            array = svCarList.current.filter(
              (car) => car.year >= parseInt(filterValue)
            );
            break;
          case "up_to":
            array = svCarList.current.filter(
              (car) => car.year <= parseInt(filterValue)
            );
            break;
          case "price":
            array = svCarList.current.filter(
              (car) => car.price <= parseInt(filterValue)
            );
            break;
          case "km":
            array = filterByKm(filterValue, array);
            break;
          default:
            throw new Error(`The filter value un the URLqueryParams is not the expected (from/up_to/price/km). 
            Please check GalleryContainer.jsx => filterData() mthd.`);
        }
      });
      return array;
    };

    updateStockState();
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
