import React from 'react';
import {carService} from "../../services";

const Car = ({car,setUpdateCar, setCars}) => {
    const {id,brand, price, year}=car
    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>setUpdateCar(car)}>update</button>
            <button onClick={()=>{
                carService.deleteById(id).then(async ()=>{
                   const {data}=await carService.getAll();
setCars([...data])
                }).catch(err=> console.log(err))
                // if (Object.keys(data).length) {
                //     const {data}= await carService.getAll()
                //     setCars(data)
                // }

            }}>delete</button>
        </div>
    );
};

export {Car};