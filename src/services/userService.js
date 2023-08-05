import {axiosSevice} from "./axiosSevice";

const userService={
    getAll: ()=>axiosSevice.get('/users'),
    getById:(id)=>axiosSevice.get(`/users/${id}`)

}
export {userService}