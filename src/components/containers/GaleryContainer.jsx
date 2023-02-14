//Bts
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Components
import GaleryMapper from '../mappers/GaleryMapper';
//Data
import stock from '../../data/stock.json'
//Hooks
import {useState, useEffect} from "react";

function GaleryContainer() {

    //state-variable
    const [arrayOfCars , setCarsList] = useState([]);

    useEffect( () => {
        //promise
        const promise = new Promise ( (resolve, reject) => {
            setTimeout( () => resolve(stock), 500);
        } )
        //promise assignment to state-variable
        promise.then( dataFromPromise => {
          setCarsList(dataFromPromise);
        } );

    }, [] )

  return (
    <section>
       <Container fluid>
            {/* header2 */}
            <Row>
                <Col >
                    <h2>Vehículos en stock</h2>
                </Col>
            </Row>
            {/* Cards */}
            <Row>
              <Col sm={12} md={12} lg={5} xl={4} xxl={4}>
                Filtros
              </Col>
              <Col sm={12} md={12} lg={7} xl={7} xxl={7}>
                  <GaleryMapper arrayOfCars={arrayOfCars} />
              </Col>
            </Row>
        </Container>
    </section>
  )
}

export default GaleryContainer