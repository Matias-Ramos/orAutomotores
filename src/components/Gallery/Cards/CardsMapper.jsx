//Bts
import { Container, Row, Col } from "react-bootstrap";
//Component
import CarCard from "./CarCard.jsx";
import NoCars from "./NoCars.jsx";

const CardsMapper = ({ stock }) => {
  return (
    <>
      {stock.length === 0 ? (
        <NoCars />
      ) : (
        <div id="cardsMapper">
          <Container fluid>
            <Row>
              {stock.map((car) => {
                return (
                  <Col
                    sm={11}
                    md={10}
                    lg={5}
                    xl={5}
                    xxl={5}
                    className="filterCol"
                    key={car.id}
                  >
                    <CarCard car={car} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default CardsMapper;
