import React, {useEffect, useState} from 'react';

import {User} from "../User/User";
import {userService} from "../../services";


const Users = () => {
   let [users, setUsers]=useState([])
   let [count, setCount]=useState(0)
    let[userDetails, setUserDetails]=useState(null)

    useEffect(()=>{ userService.getAll().then(value=>value.data).then(value=>setUsers([...value]))},[count])

    return (
        <div>
<h1>User details:</h1>
            {
               userDetails && <User user={userDetails}/>
            }

            <h1>Users:</h1>
            {
                users.map(user=><User key={user.id} user={user} setUserDetails={setUserDetails}/>)
            }
        </div>
    );
};

export {Users};