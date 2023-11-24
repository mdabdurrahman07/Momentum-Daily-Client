import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import registerSvg from '../../assets/svg/registerSVG/undraw_newspaper_re_syf5.svg'
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";
import './register.css'
import { updateProfile } from "firebase/auth";

const Register = () => {
    const navigate = useNavigate()
    const {createUser} = UseAuth()
    const { register, handleSubmit , reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    const name = data?.name
    const img = data?.img
    const email = data?.email
    const password = data?.pass
    if(password.length < 6){
        toast.error("The Password Must be at least 6 Characters")
        return
      }
      else if(!/[!@#$%^&*()_+{}]/.test(password)){
               toast.error("The Password Must Contain One Special Characters")
                return
      }
      else if(!/^(?=.*[A-Z]).*$/.test(password)){
            toast.error("The Password Must Contain One Capital Letter")
            return
      }
    createUser(email , password)
    .then(res=>{
        console.log(res)
        if(res){
            // updating an user
            updateProfile(res.user, {
                displayName: name , photoURL: img
              }).then(() => {
                
                
              }).catch((error) => {
                console.log(error)
              });
            toast.success('User Created Successfully')
            navigate('/')
            reset()
        }
    })
    .catch(error=>{
        console.log(error.message)
        toast.error(error.message)
    })

  }
    return (
        <div className="register">
            {/* className="bg-gradient-to-r from-cyan-500 to-blue-500 overflow-auto min-h-screen" */}
           
                <div className="flex justify-around items-center py-52">
                <section>
                 <img src={registerSvg} alt="" />
                  </section>
                  
                  <section>
                  <div className="bg-white p-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-2">

                        <h1 className="text-center font-semibold text-2xl text-[#3c6e71]">Create An Account</h1>


                <div className="form-control w-full max-w-sm">
                <label className="label">
                    <span className="label-text text-2xl font-medium">Name</span>
                    
                </label>
                <input {...register("name")} type="text" required placeholder="Your Name" className="input input-bordered w-full max-w-sm" />

                </div>

                <div className="form-control w-full  max-w-sm">
                <label className="label">
                    <span className="label-text text-2xl font-medium">Email</span>
                    
                </label>
                <input {...register("email")} type="email" required placeholder="Your Email" className="input input-bordered w-full max-w-sm" />

                </div>

                <div className="form-control w-full  max-w-sm">
                <label className="label">
                    <span className="label-text text-2xl font-medium">Photo</span>
                    
                </label>
                <input {...register("img")} type="url" required placeholder="Img Link" className="input input-bordered w-full max-w-sm" />

                </div>
                <div className="form-control w-full  max-w-sm">
                <label className="label">
                    <span className="label-text text-2xl font-medium">Password</span>
                    
                </label>
                <input {...register("pass")} type="password" required placeholder="Password" className="input input-bordered w-full max-w-sm" />

                </div>

                    
                       
                    <div className="flex justify-center my-3">
                    <button type="submit" className="btn-wide py-2 rounded-md bg-[#284b63] text-white text-xl">Register</button>
                    </div>


                      
                    <GoogleLogin></GoogleLogin>

                    <h1 className="font-medium text-xl text-center">Already have an account ? <span><Link to="/login"><u>Login</u></Link></span></h1>

                </form>
                    </div>
                  </section>
                </div>
                   


       
        </div>
    );
};

export default Register;