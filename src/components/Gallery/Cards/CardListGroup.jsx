import ListGroup from "react-bootstrap/ListGroup";

const CardListGroup = ({ car }) => (
  <ListGroup className="mt-2">
    <ListGroup.Item>
      <span>
        <b>$ {car.price}</b>
      </span>
      <span>
        <i>
          {car.year} | {car.km} Km
        </i>
      </span>
    </ListGroup.Item>
  </ListGroup>
);

export default CardListGroup;
