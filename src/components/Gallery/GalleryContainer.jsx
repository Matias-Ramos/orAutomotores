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
import { formatStock } from "../../utils/byGallery/stockDataFormatting.js";
import { filterData } from "../../utils/byGallery/filterStock.js";
import { getPriceRange } from "../../utils/byFilters/minMaxPrices.js";
// Data
import { getSvCarList } from "../../firebase/firestoreDataMgmt.js";

function GalleryContainer() {
  let svCarList = useRef([]);
  let minMaxPrices = useRef([]);
  const [stock, setStock] = useState([]);
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);

  //refreshes the stock based on query params update
  useEffect(() => {
    const updateStockState = async () => {
      // fetches svData only if the app has just been opened.
      if (svCarList.current.length === 0) {
        svCarList.current = await getSvCarList();
        svCarList.current = formatStock(svCarList.current);
        minMaxPrices.current = getPriceRange(svCarList.current);
      }
      const array = filterData(query, svCarList.current);
      setStock(array);
    };
    updateStockState();
  }, [query]);

  

  return (
    <main id="gallerySection">
      <QyParamsCtxtProvider>
        <FiltersContainer
          qtyOfCars={stock.length}
          minMaxPrices={minMaxPrices.current}
        />
      </QyParamsCtxtProvider>
      {stock.length === 0 ? <NoCars /> : <CardsMapper stock={stock} />}
    </main>
  );
}

export default GalleryContainer;
