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
        <hr />
         <div onClick={handleGoogle} className="flex justify-around items-center bg-green-300 rounded-xl">
         <h1>Google</h1>
        <FcGoogle className="text-5xl"/>

         </div>
         
     
        
        </>
        
      
    );
};

export default GoogleLogin;