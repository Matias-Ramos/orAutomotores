import {
  // Components
  CardsMapper,
  FiltersContainerDktp,
  NavBarMobile,
  Loading,
  QyParamsCtxtProvider,
  Error,
  // Hooks
  useState,
  useEffect,
  useMemo,
  useRef,
  useLocation,
  useQuery,
  // Functions
  modelStockData,
  filterData,
  getPriceRange,
  getSvCarList,
} from "./tools.js";

function GalleryContainer() {

  /********************* */
  // Variables

  let relativeCarList = useRef([]);
  let priceRange = useRef({});
  const [stock, setStock] = useState([]);
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  
  /********************* */
  // useQuery data fetching

  const { data: rawCarsList, error: useQueryError, isLoading } = useQuery({
    queryKey: ["stock"],
    queryFn: async() => {
      const carList = await getSvCarList();
      return carList;
    },
    staleTime: 60*1000,
    retry: 3,
    retryDelay: 3000
  })

  /********************* */
  // Persist & Format the data

  useEffect(() => {
    if(relativeCarList.current?.length===0 && rawCarsList){
      relativeCarList.current = rawCarsList;
      relativeCarList.current = modelStockData(relativeCarList.current);
      priceRange.current = getPriceRange(relativeCarList.current);
    }

    const array = filterData(query, relativeCarList.current);
    const sortedStock = [...array].sort((a, b) => b.priceUsd - a.priceUsd);
    setStock(sortedStock);
  },[rawCarsList, query])

  /********************* */
  // Render

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
      { isLoading && <Loading /> }
      { useQueryError && <Error errorMsg={useQueryError} /> }
      { (!useQueryError && !isLoading && relativeCarList.current) && <CardsMapper stock={stock} /> }
    </main>
  );
}

export default GalleryContainer;
