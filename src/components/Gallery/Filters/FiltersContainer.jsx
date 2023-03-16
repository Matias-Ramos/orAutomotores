// Bts
import { Container, Row, Col } from "react-bootstrap";
// Components
import PriceFilterContainer from "./Price/PriceFilterContainer.jsx";
import KmFilter from "./KmFilter.jsx";
import YearsFilter from "./YearsFilter.jsx";
import FilterBottomBtns from "./Btns/FilterBottomBtns.jsx";
// Hook
import { useContext } from "react";
// Context
import { queryCtxt } from "../../../context/QyParamsCtxt";

function FiltersContainer({ qtyOfCars, minMaxPrices }) {
  const { updateQyParams, params } = useContext(queryCtxt);
  return (
    <Container fluid id="filters">
      <Row>
        {/* Km */}
        <Col sm={11} md={11} lg={3} xl={2} xxl={2} className="filterCol">
          <KmFilter
            updateQyParams={updateQyParams}
            kmChosenRange={params.get("km")}
          />
        </Col>

        {/* Price */}
        <Col sm={11} md={11} lg={5} xl={5} xxl={5} className="filterCol">
          <PriceFilterContainer
            updateQyParams={updateQyParams}
            priceChosenRange={params.get("price")}
            minMaxPrices={minMaxPrices}
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
              yearChosenRange={params.get("from")}
            />
            <YearsFilter
              type="Hasta"
              updateQyParams={updateQyParams}
              yearChosenRange={params.get("up_to")}
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
