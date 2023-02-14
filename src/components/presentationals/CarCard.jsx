import Card from 'react-bootstrap/Card';
import ML from './ML.jsx';
import CardListGroup from './CardListGroup';

function CarCard({car}) {
  return (
    <>
    <Card className="card">
        <Card.Img variant="top" src={ require('../../assets/vehicles/'+car.imgName)} />
        <Card.Body>
            <Card.Title>{car.title}</Card.Title>
            <CardListGroup car={car} />
            <ML />
        </Card.Body>
    </Card>  
    </>
  )
}

export default CarCard