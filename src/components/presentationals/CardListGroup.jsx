import ListGroup from 'react-bootstrap/ListGroup';

const CardListGroup = ({car}) => 
  <ListGroup className="mt-2" >
    <ListGroup.Item>
      <b>$ {car.price}</b>
      <br />
      <i>{car.year} | {car.km} Km</i>
    </ListGroup.Item>
  </ListGroup>

export default CardListGroup