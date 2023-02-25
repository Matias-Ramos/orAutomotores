// Bts
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Components
import GaleryMapper from "../mappers/GaleryMapper";
import FiltersContainer from "./FiltersContainer";
// Context
import { QyParamsCtxtProvider } from "../../context/QyParamsCtxt.jsx";
//Hooks
import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";


function GaleryContainer() {

  const [stock, setStock] = useState([]);
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);


  useEffect(() => {

    //brings an unfiltered list on every queryparam update
    const fetchData = async () => {
      const response = await fetch(`/data/stock.json`); //from public
      const newData = await response.json();
      setStock(newData);
    };
    fetchData(); 
    
  }, [query]);

  useEffect(()=>{
    function filterByKm(chosenKm, arrayOfCars){
      let result = [];
      switch(chosenKm){
          case "0":
              result = arrayOfCars.filter(car => parseInt(car.km) === 0 )
              break;
          case "0_to_100":
              result = arrayOfCars.filter(car => (parseInt(car.km) > 0 && parseInt(car.km) <= 100000 ) )
              break;
          case "100_plus":
              result = arrayOfCars.filter(car => parseInt(car.km) > 100000 )
              break;
          case "any":
              result = arrayOfCars.filter(car => parseInt(car.km) >= 0 )
              break;
          default: 
              throw new Error(`Cannot filter by Km. $chosenKm value is: ${chosenKm}.\n
              Check the range is contemplated in the filterByKm function`);
      }
      return result;
  }
    const filterData = () => {
      let arrayOfCars = [...stock]
      query.forEach( (filterValue, filterKey) => {
        switch(filterKey){
          case "from":
              arrayOfCars = arrayOfCars.filter( car => parseInt(car.year) >= parseInt(filterValue) )
              break;
          case "up_to":
              arrayOfCars = arrayOfCars.filter( car => parseInt(car.year) <= parseInt(filterValue) )
              break;
          case "price":
              //console.log('entró price')
              arrayOfCars = arrayOfCars.filter( car => parseInt(car.price) <= parseInt(filterValue) )
              break;
          case "km":
              arrayOfCars = filterByKm(filterValue, arrayOfCars)
              break;
          default:
              console.log("entró default");
      }
      })
      return arrayOfCars
    }

    setStock( () => filterData() )

  },[query,stock])



  return (
    <section id="galerySection">
      <Container fluid>
        <Row>
          {/* Filters */}
          <Col sm={11} md={11} lg={4} xl={4} xxl={3} className="galeryCols">
            <QyParamsCtxtProvider>
              <FiltersContainer />
            </QyParamsCtxtProvider>
          </Col>

          {/* Cards */}
          <Col sm={11} md={11} lg={7} xl={6} xxl={5} className="galeryCols">
            <GaleryMapper stock={stock}  />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default GaleryContainer;
