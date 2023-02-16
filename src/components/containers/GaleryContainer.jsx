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
    <section id="galerySection">
       <Container fluid>
            <Row>
              
              {/* Filters */}
              <Col sm={11} md={11} lg={5} xl={4} xxl={3} className="galeryCols">
                Filtros
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum beatae doloremque quia ipsa ad assumenda velit quaerat, tenetur sunt neque! Mollitia ratione, quos debitis libero cumque veritatis tenetur maiores porro!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum beatae doloremque quia ipsa ad assumenda velit quaerat, tenetur sunt neque! Mollitia ratione, quos debitis libero cumque veritatis tenetur maiores porro!
              </Col>

              {/* Cards */}
              <Col sm={11} md={11} lg={7} xl={7} xxl={6} className="galeryCols">
                  <GaleryMapper arrayOfCars={arrayOfCars} />
              </Col>

            </Row>
        </Container>
    </section>
  )
}

export default GaleryContainer