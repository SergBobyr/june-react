import React from 'react';

const Character = ({character}) => {
    const {name, status, image}=character
    return (
        <div>
<div>name:{name}</div>
<div>status:{status}</div>
<img src={image} alt={name}/>
        </div>
    );
};

export {Character};