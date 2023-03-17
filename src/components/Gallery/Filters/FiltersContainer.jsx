// Bts
import { Container, Row, Col } from "react-bootstrap";
// Components
import PriceFilterContainer from "./Price/PriceFilterContainer.jsx";
import KmFilterContainer from "./Km/KmFilterContainer.jsx";
import YearsFilter from "./YearsFilter.jsx";
import FilterBottomBtns from "./Btns/FilterBottomBtns.jsx";
// Hook
import { useContext } from "react";
// Context
import { queryCtxt } from "../../../context/QyParamsCtxt";

function FiltersContainer({ qtyOfCars, priceRange }) {
  const { updateQyParams, params } = useContext(queryCtxt);
  return (
    <Container fluid id="filters">
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

        {/* Buttons */}
        <Col sm={11} md={11} lg={12} xl={12} xxl={12}>
          <FilterBottomBtns qtyOfCars={qtyOfCars} />
        </Col>
      </Row>
    </Container>
  );
}

export default FiltersContainer;
