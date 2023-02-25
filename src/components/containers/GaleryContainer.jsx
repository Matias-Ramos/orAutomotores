// Bts
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Components
import GaleryMapper from "../mappers/GaleryMapper.jsx";
import FiltersContainer from "./FiltersContainer.jsx";
import CardCounter from "../presentationals/CardCounter.jsx";
// Context
import { QyParamsCtxtProvider } from "../../context/QyParamsCtxt.jsx";
//Hooks
import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

function GaleryContainer() {
  const [stock, setStock] = useState([]);
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);

  //refreshes the stock based on the query params
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/data/stock.json`); //from public
      const newData = await response.json();
      setStock(newData); //brings an unfiltered list on every queryparam update
      filterData(); //then filters based on query params
    };
    function filterByKm(rangeKm, arrayOfCars) {
      let result = [];
      switch (rangeKm) {
        case "0":
          result = arrayOfCars.filter((car) => car.km === 0);
          break;
        case "0_to_100":
          result = arrayOfCars.filter(
            (car) => car.km > 0 && parseInt(car.km) <= 100000
          );
          break;
        case "100_plus":
          result = arrayOfCars.filter((car) => car.km > 100000);
          break;
        case "any":
          result = arrayOfCars.filter((car) => car.km >= 0);
          break;
        default:
          throw new Error(`Cannot filter by Km. $rangeKm value is: ${rangeKm}.\n
              Check the range is contemplated in the filterByKm function`);
      }
      return result;
    }
    const filterData = () => {
      query.forEach((filterValue, filterKey) => {
        switch (filterKey) {
          case "from":
            setStock((arrayOfCars) =>
              arrayOfCars.filter((car) => car.year >= parseInt(filterValue))
            );
            break;
          case "up_to":
            setStock((arrayOfCars) =>
              arrayOfCars.filter((car) => car.year <= parseInt(filterValue))
            );
            break;
          case "price":
            setStock((arrayOfCars) =>
              arrayOfCars.filter((car) => car.price <= parseInt(filterValue))
            );
            break;
          case "km":
            setStock((arrayOfCars) => filterByKm(filterValue, arrayOfCars));
            break;
          default:
            throw new Error(`The filter value un the URLqueryParams is not the expected (from/up_to/price/km). 
            Please check GaleryContainer.jsx => filterData() mthd.`);
        }
      });
    };

    fetchData();
  }, [query]);

  return (
    <section id="galerySection">
      <Container fluid>
        <Row>
          {/* Filters */}
          <Col sm={11} md={11} lg={4} xl={4} xxl={3} className="galeryCols">
            <QyParamsCtxtProvider>
              <FiltersContainer />
            </QyParamsCtxtProvider>
            <CardCounter qtyOfCars={stock.length} />
          </Col>

          {/* Cards */}
          <Col sm={11} md={11} lg={7} xl={6} xxl={5} className="galeryCols">
            <GaleryMapper stock={stock} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default GaleryContainer;
