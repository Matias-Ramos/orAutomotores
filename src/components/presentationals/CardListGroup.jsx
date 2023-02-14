import ListGroup from 'react-bootstrap/ListGroup';

function CardListGroup({car}) {
    return (
        <>
          {
            <ListGroup horizontal='md' className="my-2" >
              <ListGroup.Item>Año: {car.year}</ListGroup.Item>
              <ListGroup.Item>${car.price}</ListGroup.Item>
              <ListGroup.Item>{car.km}km</ListGroup.Item>
            </ListGroup>
          }
        </>
      );
}

export default CardListGroup