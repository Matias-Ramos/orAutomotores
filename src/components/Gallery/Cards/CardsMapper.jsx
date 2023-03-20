// Bts
import { Container, Row, Col } from "react-bootstrap";
// Component
import CarCard from "./CarCard.jsx";
import NoCars from "./NoCars.jsx";
// PropTypes
import PropTypes from "prop-types"

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

CardsMapper.propTypes = { 
  stock : PropTypes.arrayOf(
    PropTypes.shape({
      year : PropTypes.number,
      km : PropTypes.number,
      title : PropTypes.string.isRequired,
      img : PropTypes.string,
      url : PropTypes.string,
      priceArs : PropTypes.number,
      priceUsd : PropTypes.number,
      sellsInDollars : PropTypes.bool
  }))
}

export default CardsMapper;
