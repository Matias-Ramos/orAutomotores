// Bts
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//Component
import CarCard from "../presentationals/CarCard";

const CardsMapper= ({ stock }) => 
    <div id='cardsMapper'>
      <Container fluid>
        <Row>
          {stock.map((car) => {
            car.km = car.km.toLocaleString().replace(",", ".");
            car.price = car.price.toLocaleString().replace(",", ".");
            return (
              <Col sm={11} md={10} lg={5} xl={5} xxl={5} className="filterCol" key={car.id}>
                <CarCard car={car} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>

export default CardsMapper;
