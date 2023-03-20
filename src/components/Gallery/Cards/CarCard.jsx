// BTS
import Card from "react-bootstrap/Card";
// Components
import ML from "./ML.jsx";
import CardListGroup from "./CardListGroup.jsx";
// PropTypes
import PropTypes from "prop-types"

const CarCard = ({ car }) => {
  return(
    <Card className="card">
    <Card.Img variant="top" src={car.img} alt={car.title} />
    <Card.Body>
      <Card.Title as="h2" className="my-4">
        {car.title}
      </Card.Title>
      <CardListGroup car={car} />
      <ML url={car.url} />
    </Card.Body>
  </Card>
  )
}

CarCard.propTypes = {
  car: PropTypes.shape({
    year: PropTypes.number,
    km: PropTypes.number,
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    url: PropTypes.string,
    priceArs: PropTypes.number,
    priceUsd: PropTypes.number,
    sellsInDollars: PropTypes.bool,
  }),
};

export default CarCard;
