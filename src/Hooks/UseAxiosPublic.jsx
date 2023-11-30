import axios from "axios";


const UseAxiosPublic = () => {
    const Public = axios.create({
        baseURL: 'https://momentum-daily-server.vercel.app',
        
      });
    return Public
};

export default UseAxiosPublic;