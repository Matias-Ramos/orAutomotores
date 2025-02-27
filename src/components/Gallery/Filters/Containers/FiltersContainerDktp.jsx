import {
  // Bts
  Container, Row, Col,
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

function FiltersContainerDktp({ qtyOfCars, priceRange }) {
  const { updateQyParams, params } = useContext(queryCtxt);
  return (
    <Container
      fluid
      id="filtersDktp"
      className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block"
    >
      <Row>
        {/* Km */}
        <Col sm={11} md={11} lg={3} xl={2} xxl={2} className="filterCol">
          <KmFilterContainer
            updateQyParams={updateQyParams}
            kmQyParam={params.get("km")}
          />
        </Col>

        {/* Price */}
        <Col sm={11} md={11} lg={5} xl={5} xxl={5} className="filterCol">
          <PriceFilterContainer
            updateQyParams={updateQyParams}
            priceInitQyParam={params.get("price_init")}
            priceLimitQyParam={params.get("price_limit")}
            priceRange={priceRange}
          />
        </Col>

        {/* Year */}
        <Col sm={11} md={11} lg={4} xl={3} xxl={3} className="filterCol">
          <span>
            <b className="mb-5">Año</b>
          </span>
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
        </Col>
      </Row>
      {/* Buttons */}
      <Row>
        <Col sm={11} md={11} lg={12} xl={12} xxl={12}>
          <FilterBottomBtns qtyOfCars={qtyOfCars} />
        </Col>
      </Row>
    </Container>
  );
}

FiltersContainerDktp.propTypes = {
  qtyOfCars: PropTypes.number.isRequired,
  priceRange: PropTypes.shape({
    minArs: PropTypes.number,
    maxArs: PropTypes.number,
  }),
};

export default FiltersContainerDktp;
