import CarCard from "../presentationals/CarCard"
import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import stock from '../../data/stock.json'


function GaleryMapper() { 
       
    const [arrayOfCars, setCarsList] = useState([]);

    //promise
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(stock), 500);
    });
    //promise assignment to state-variable
    promise.then( dataFromPromise => {
        setCarsList([...dataFromPromise])
    });

    const [arrayOfCarsCopy, setCarsCopyList] = useState(arrayOfCars);
    
    // const pathname = window.location.search
    // const [currentUrl, setCurrentUrl] = useState(pathname)
    // useEffect(() => {
    //     setCurrentUrl(pathname)
    //  }, [pathname])

    //  useEffect(() => {
    //     console.log('the url has changed!!')
    //     console.log(currentUrl);
    //   }, [currentUrl]); 


    const { search } = useLocation();
    const query = useMemo(() => new URLSearchParams(search), [search]);

    useEffect(() => {
        function filterByKm(chosenKm){
            let result = [];
            switch(chosenKm){
                case "0":
                    result = arrayOfCars.filter(car => parseInt(car.km) === 0 )
                    break;
                case "0_to_100":
                    result = arrayOfCars.filter(car => (parseInt(car.km) > 0 && parseInt(car.km) <= 100000 ) )
                    break;
                case "100_plus":
                    result = arrayOfCars.filter(car => parseInt(car.km) > 100000 )
                    break;
                case "any":
                    result = [...arrayOfCars]
                    break;
                default: 
                    throw new Error(`Cannot filter by Km. $chosenKm value is: ${chosenKm}.\n
                    Check the range is contemplated in the filterByKm function`);
            }
            return result;
        }
        function updateCarsByCat(){
            query.forEach( (filterValue, filterKey) => {

                switch(filterKey){
                    case "from":
                        setCarsCopyList(arrayOfCars.filter( car => parseInt(car.year) >= parseInt(filterValue) ))
                        break;
                    case "up_to":
                        setCarsCopyList(arrayOfCars.filter( car => parseInt(car.year) <= parseInt(filterValue) ))
                        break;
                    case "price":
                        setCarsCopyList(arrayOfCars.filter( car => parseInt(car.price) <= parseInt(filterValue) ))
                        break;
                    case "km":
                        setCarsCopyList(filterByKm(filterValue))
                        break;
                    default:
                        setCarsCopyList(arrayOfCars);
                }
            })    
        }
        updateCarsByCat();
        // query.forEach( (filterValue, filterKey) => {

        //     switch(filterKey){
        //         case "from":
        //             setCarsCopyList(arrayOfCars.filter( car => parseInt(car.year) >= parseInt(filterValue) ))
        //             break;
        //         case "up_to":
        //             setCarsCopyList(arrayOfCars.filter( car => parseInt(car.year) <= parseInt(filterValue) ))
        //             break;
        //         case "price":
        //             setCarsCopyList(arrayOfCars.filter( car => parseInt(car.price) <= parseInt(filterValue) ))
        //             break;
        //         case "km":
        //             setCarsCopyList(filterByKm(filterValue))
        //             break;
        //         default:
        //             setCarsCopyList(arrayOfCars);
        //     }
        // })
    }, [query]); 

  
    return (
        arrayOfCarsCopy.map( car => {
            car.km = car.km.toLocaleString().replace(',', '.');
            car.price = car.price.toLocaleString().replace(',', '.');
            return <CarCard key={car.id} car={car} />
            }
        )
    )
}

export default GaleryMapper