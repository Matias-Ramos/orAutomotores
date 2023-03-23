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
      bg="light"
      expand="lg"
      className="d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none"
    >
      <NavbarBts.Toggle aria-controls="basic-navbar-nav">
        <span>Filtros▾</span>
      </NavbarBts.Toggle>
      <NavbarBts.Collapse id="basic-navbar-nav">
        <NavbarBts.Text>
          <KmFilterContainer
            updateQyParams={updateQyParams}
            kmQyParam={params.get("km")}
          />
        </NavbarBts.Text>
        <NavbarBts.Text>
          <PriceFilterContainer
            updateQyParams={updateQyParams}
            priceInitQyParam={params.get("price_init")}
            priceLimitQyParam={params.get("price_limit")}
            priceRange={priceRange}
          />
        </NavbarBts.Text>
        <NavbarBts.Text>
          <div>
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
        </NavbarBts.Text>
        <NavbarBts.Text>
          <FilterBottomBtns qtyOfCars={qtyOfCars} />
        </NavbarBts.Text>
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
