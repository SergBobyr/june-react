import React from 'react';

const Comments = ({comments}) => {

    return (
        <div>{comments.map(item=>{const {id, name}=item; return (<div key={id}> {id}---{name}</div>)})}</div>
    );
};

export {Comments};