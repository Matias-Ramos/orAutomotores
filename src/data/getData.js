import stock from "./stock.json";

export default function getData(){
    
    let arrayOfCars = [];
    //promise
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(stock), 500);
    });

    //promise assignment to state-variable
    promise.then( dataFromPromise => {
        arrayOfCars = [...dataFromPromise]
    });
    return arrayOfCars;
}
