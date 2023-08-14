import React from 'react';


const Users = ({users}) => {

    return (
        <div>
            {users.map(item=>{
                const{id, username}=item;
                return(
                    <div key={id}>
                        {id} --- {username}
                    </div>
                )
            })}
        </div>
    );
};

export {Users};