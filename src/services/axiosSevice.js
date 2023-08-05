import axios from "axios";

const axiosSevice=axios.create({baseURL:'https://jsonplaceholder.typicode.com'})
export {axiosSevice}