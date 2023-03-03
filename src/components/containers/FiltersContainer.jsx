// Bts
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Components
import PriceFilter from "../presentationals/PriceFilter.jsx";
import KmFilter from "../presentationals/KmFilter.jsx";
import YearsFilter from "../presentationals/YearsFilter.jsx";
import FilterBottomBtns from "./FilterBottomBtns.jsx";
// Hook
import { useContext } from "react";
// Context
import { queryCtxt } from "../../context/QyParamsCtxt";

function FiltersContainer({ qtyOfCars }) {
  const { updateQyParams, params } = useContext(queryCtxt);

  // Price matters
  const highestValue = 7000000;
  const lowestValue = 500000;
  function makePriceReadable(value) {
    value = value.toLocaleString().replace(",", ".").replace(",", ".");
    value = "$ " + value;
    return value;
  }

  // Years matters
  let carPossibleYears = [];
  for (let i = new Date().getFullYear(); i >= 1980; i--) {
    carPossibleYears.push(i);
  }
  return (
    <Container fluid id='filters'>
      <Row>
        {/* Km */}
        <Col sm={11} md={11} lg={3} xl={2} xxl={2} className="filterCol">
          <KmFilter
            updateQyParams={updateQyParams}
            kmChosenRange={params.get("km")}
          />
        </Col>

        {/* Price */}
        <Col sm={11} md={11} lg={5} xl={5} xxl={5} className="filterCol" >
          <PriceFilter
            updateQyParams={updateQyParams}
            makePriceReadable={makePriceReadable}
            highestValue={highestValue}
            lowestValue={lowestValue}
            priceChosenRange={params.get("price")}
          />

        </Col>

        {/* Year */}
        <Col sm={11} md={11} lg={4} xl={3} xxl={3} className="filterCol">
          <span>
            <b className='mb-5'>Año</b>
            <br />
          </span>
          <div>
          <YearsFilter
            type="Desde"
            updateQyParams={updateQyParams}
            carPossibleYears={carPossibleYears}
            yearChosenRange={params.get("from")}
          />
          <YearsFilter
            type="Hasta"
            updateQyParams={updateQyParams}
            carPossibleYears={carPossibleYears}
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
