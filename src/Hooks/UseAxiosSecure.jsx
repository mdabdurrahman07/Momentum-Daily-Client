import axios from "axios";


const UseAxiosSecure = () => {
    const Secure = axios.create({
        baseURL: 'http://localhost:5000',
        
      });
    return Secure
};

export default UseAxiosSecure;