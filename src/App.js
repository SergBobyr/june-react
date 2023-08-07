import React, {useEffect, useState} from 'react';

const App = () => {
    const [launches, setLaunches]=useState([])
    useEffect(()=>{fetch('https://api.spacexdata.com/v3/launches/').then(resp=>resp.json()).then(resp=> setLaunches(resp))},[])
    return (
        <div >
            {launches.filter(item=>item.launch_year!=='2020').map(launche=>{
                return(
                <div key={launche.flight_number}>{launche.mission_name} --- {launche.launch_year}</div>)})}
        </div>
    );
};

export {App};