import axios from "axios";


const UseAxiosPublic = () => {
    const Public = axios.create({
        baseURL: 'https://momentum-daily-server-4j2b9uwm5.vercel.app',
        
      });
    return Public
};

export default UseAxiosPublic;