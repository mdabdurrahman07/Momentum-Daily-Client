import toast from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const navigate = useNavigate()
    const  {googleLogin} = UseAuth()
    const handleGoogle = () =>{

        googleLogin()
        .then(result =>{
            console.log(result.user)
            if(result.user){
             toast.success('User Created Successfully')
             navigate('/')
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