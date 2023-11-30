import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";


const UseAxiosSecure = () => {
  const navigate = useNavigate()
  const {logout} = UseAuth()
    const Secure = axios.create({
        baseURL: 'https://momentum-daily-server-4j2b9uwm5.vercel.app',
        
      });
      Secure.interceptors.request.use(function (config) {
        // Do something before request is sent
       const token = localStorage.getItem('AccessToken')
      //  console.log(token)
       config.headers.authorized = `Token ${token}`
      //  console.log(config)
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
      // intercepts 401 & 403
      Secure.interceptors.response.use(function (response) {
        return response;
      }, async (error) => {
        console.log(error)
        const status = error.response.status; 
        if(status === 401 || status === 403 ){
          await logout()
          navigate('/login')
        }
        return Promise.reject(error);
      });
    return Secure
};

export default UseAxiosSecure;