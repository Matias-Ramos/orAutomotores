import {
  // Bts
  NavbarBts,
  // Components
  PriceFilterContainer,
  KmFilterContainer,
  YearsFilter,
  FilterBottomBtns,
  // Hooks
  useContext, queryCtxt,
  // Functions
  PropTypes
} from "./tools.js"


function NavBarMobile({ qtyOfCars, priceRange }) {
  const { updateQyParams, params } = useContext(queryCtxt);
  return (
    <NavbarBts
      sticky="top"
      expand="lg"
      className="d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none"
    >
      <NavbarBts.Toggle aria-controls="basic-navbar-nav">
        <span>Filtros▾</span>
      </NavbarBts.Toggle>
      <NavbarBts.Collapse id="basic-navbar-nav">
        <div className="filterCompCont">
          <KmFilterContainer
            updateQyParams={updateQyParams}
            kmQyParam={params.get("km")}
          />
        </div>
        <div className="filterCompCont">
          <PriceFilterContainer
            updateQyParams={updateQyParams}
            priceInitQyParam={params.get("price_init")}
            priceLimitQyParam={params.get("price_limit")}
            priceRange={priceRange}
          />
        </div>
        <div className="filterCompCont">
          <span>
            <b className="mb-5">Año</b>
          </span>
          <YearsFilter
            type="Desde"
            updateQyParams={updateQyParams}
            yearQyParam={params.get("from")}
          />
          <YearsFilter
            type="Hasta"
            updateQyParams={updateQyParams}
            yearQyParam={params.get("up_to")}
          />
        </div>
        <div>
          <FilterBottomBtns qtyOfCars={qtyOfCars} />
        </div>
      </NavbarBts.Collapse>
    </NavbarBts>
  );
}
NavBarMobile.propTypes = {
  qtyOfCars: PropTypes.number.isRequired,
  priceRange: PropTypes.shape({
    minArs: PropTypes.number,
    maxArs: PropTypes.number,
  }),
};
export default NavBarMobile;
