import axios from "axios";


const UseAxiosPublic = () => {
    const Public = axios.create({
        baseURL: 'http://localhost:5000',
        
      });
    return Public
};

export default UseAxiosPublic;