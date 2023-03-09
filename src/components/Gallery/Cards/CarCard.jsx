// BTS
import Card from "react-bootstrap/Card";
// Components
import ML from "./ML.jsx";
import CardListGroup from "./CardListGroup.jsx";

const CarCard = ({ car }) => (
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
);

export default CarCard;
