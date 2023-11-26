import toast from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const GoogleLogin = () => {
    const navigate = useNavigate()
    const  {googleLogin} = UseAuth()
    const AxiosPublic = UseAxiosPublic()
    const handleGoogle = () =>{

        googleLogin()
        .then(result =>{
            console.log(result.user)
            if(result.user){
                const UserInfo = {
                    displayName: result?.user?.displayName,
                    email: result?.user?.email,
                    photoURL: result?.user?.photoURL,

                }
                AxiosPublic.post('/users' , UserInfo)
                .then(()=>{
                    toast.success('User Created Successfully')
                   navigate('/')
                })
                .catch((error)=>{
                    console.log(error)
                    toast.error(error)
                })
             
           }
           })
         
    }
    return (

        <>
       <div className="flex justify-center w-80 h-[1px] bg-slate-600"></div>
         <div onClick={handleGoogle} className="flex justify-around items-center rounded-full">
        <FcGoogle className="text-6xl animate-pulse"/>

         </div>
         
     
        
        </>
        
      
    );
};

export default GoogleLogin;