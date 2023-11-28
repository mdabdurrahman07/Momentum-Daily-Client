import UseAxiosSecure from './UseAxiosSecure';
import UseAuth from './UseAuth';
import { useQuery } from '@tanstack/react-query';

const UseAdmin = () => {
    const AxiosSecure = UseAxiosSecure()
    const {user , loading} = UseAuth()
    console.log(user?.email)
    const {data : isAdmin , isPending  : isAdminLoading } = useQuery({
       
        queryKey : [user?.email , "isAdmin"],
        enabled : !loading,
        queryFn : async () => {

       
            
            const res = await AxiosSecure.get(`/users/admin/${user?.email}`)
           
            console.log('admin check' , res.data.admin)
            return res.data?.admin
        
          
            

        }
    })
    return [isAdmin , isAdminLoading]
};

export default UseAdmin;