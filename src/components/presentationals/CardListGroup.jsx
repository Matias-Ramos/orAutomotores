import ListGroup from 'react-bootstrap/ListGroup';

function CardListGroup({car}) {
    return (
        <>
          {
            <ListGroup className="mt-2" >
              <ListGroup.Item>
                <b>$ {car.price}</b>
                <br />
                <i>{car.year} | {car.km} Km</i>
              </ListGroup.Item>
            </ListGroup>
          }
        </>
      );
}

export default CardListGroup