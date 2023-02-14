import CarCard from "../presentationals/CarCard"

function GaleryMapper({arrayOfCars}) {
    return (
        arrayOfCars.map( car => {
            return <CarCard key={car.id} car={car} />
            }
        )
    )
}

export default GaleryMapper