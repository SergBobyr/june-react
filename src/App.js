import React from 'react';
import {CarForm, Cars} from "./components";
import {useEffect, useState} from "react";
import {carService} from "./services";



const App = () => {

    const [cars, setCars]=useState([])
    useEffect(()=>{carService.getAll().then(({data})=>setCars([...data]))},[])
    const [updateCar, setUpdateCar]=useState(null)

    return (
        <div>
         <CarForm setCars={setCars} updateCar={updateCar}/>
            <hr/>
            <Cars cars={cars} setUpdateCar={setUpdateCar}/>
        </div>
    );
};

export {App};