import CarCard from "../presentationals/CarCard"

function GaleryMapper({arrayOfCars}) {
    return (
        arrayOfCars.map( car => {

            car.km = car.km.toLocaleString().replace(',', '.');
            car.price = car.price.toLocaleString().replace(',', '.');
            return <CarCard key={car.id} car={car} />
            }
        )
    )
}

export default GaleryMapper