import React, {useState} from 'react';

const Count = () => {
    const [b, setB]=useState(0);

    return (
        <div>
            <div>B: {b}</div>
            <button onClick={()=>setB(prevState => prevState+1)}>Increment</button>
        </div>
    );
};

export {Count};