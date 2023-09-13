import {
  // Components
  CardsMapper,
  FiltersContainerDktp,
  NavBarMobile,
  Loading,
  QyParamsCtxtProvider,
  // Hooks
  useState,
  useEffect,
  useMemo,
  useRef,
  useLocation,
  // Functions
  modelStockData,
  filterData,
  getPriceRange,
  getSvCarList,
} from "./tools.js";

function GalleryContainer() {
  let svCarList = useRef([]);
  let priceRange = useRef({});
  const [stock, setStock] = useState([]);
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);

  //refreshes the stock based on query params update
  useEffect(() => {
    const updateStockState = async () => {
      // fetches svData only if the app has just been opened.
      if (svCarList.current.length === 0) {
        svCarList.current = await getSvCarList();
        svCarList.current = modelStockData(svCarList.current);
        priceRange.current = getPriceRange(svCarList.current);
      }
      const array = filterData(query, svCarList.current);
      const sortedStock = [...array].sort((a, b) => b.priceUsd - a.priceUsd);
      setStock(sortedStock);
    };
    updateStockState();
  }, [query]);

  return (
    <main id="gallerySection">
      <QyParamsCtxtProvider>
        <FiltersContainerDktp
          qtyOfCars={stock.length}
          priceRange={priceRange.current}
        />
        <NavBarMobile 
          qtyOfCars={stock.length}
          priceRange={priceRange.current}
        />
      </QyParamsCtxtProvider>
      {svCarList.current.length === 0 ? <Loading /> : <CardsMapper stock={stock} /> }
    </main>
  );
}

export default GalleryContainer;
