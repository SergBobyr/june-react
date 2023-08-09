import React, { useState} from 'react';

import {Posts, Users} from "./components";


const App = () => {
    const [userId, setUserId]=useState(null)
    return (
        <div>
         <Users setUserId={setUserId}/>
            {userId && <Posts userId={userId}/>}
        </div>
    );
};

export {App};