import {
  // Components
  CardsMapper,
  FiltersContainer,
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
      setStock(array);
    };
    updateStockState();
  }, [query]);

  return (
    <main id="gallerySection">
      <QyParamsCtxtProvider>
        <FiltersContainer
          qtyOfCars={stock.length}
          priceRange={priceRange.current}
        />
      </QyParamsCtxtProvider>
      {svCarList.current.length === 0 ? <Loading /> : <CardsMapper stock={stock} /> }
    </main>
  );
}

export default GalleryContainer;
