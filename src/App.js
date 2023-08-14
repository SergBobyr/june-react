import React from 'react';
import {UsersForm} from "./components/users_form/UsersForm";
import {Users} from "./components/users/Users";
import {useEffect, useState} from "react";
import {usersRequests as commentsRequests, usersRequests} from "./api/requests/usersRequests";
import {Comments} from "./components/comments/Comments";
import {CommentsForm} from "./components/comments_form/CommentsForm";
import {commentRequests} from "./api/requests/commentRequests";

const App = () => {
    // const [users, setUsers]=useState([])
    // useEffect(()=>{
    //     usersRequests.getAll().then(({data})=>setUsers([...data]))
    // },[])
    const [comments, setComments]=useState([])
     useEffect(()=>{
             commentRequests.getAll().then(({data})=>setComments([...data]))
     },[])

    return (
        <div style={{textAlign: 'center'}}>
         {/*<UsersForm setUsers={setUsers}/>*/}
         {/*   <hr/>*/}
         {/*   <Users users={users}/>*/}
            <CommentsForm setComments={setComments}/>

            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {App};