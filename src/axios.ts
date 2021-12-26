import axios from "axios";

console.log(process.env.REACT_APP_API_SERVER);


const Axios = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER ?? ""
});


export default Axios;
