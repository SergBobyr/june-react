import React from 'react';

const User = ({user, setUserDetails}) => {

    let{id, name, username, email}=user
    return (
        <div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>id: {id}</div>
            <button onClick={()=>{setUserDetails(user)}}>GetDetails</button>

        </div>
    );
};

export {User};