import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import registerSvg from '../../assets/svg/registerSVG/undraw_newspaper_re_syf5.svg'
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";

const Register = () => {
    const navigate = useNavigate()
    const {createUser} = UseAuth()
    const { register, handleSubmit , reset } = useForm();
  const onSubmit = data => {
    console.log(data);
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
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 overflow-auto min-h-screen">
           
        <div className="max-w-7xl mx-auto p-3 bg-white my-52 flex">
                    {/* form */}
                    <div className="bg-slate-300 p-5">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-2">


                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text text-2xl font-medium">Name</span>
                    
                </label>
                <input {...register("name")} type="text" required placeholder="Your Name" className="input input-bordered w-full max-w-sm" />

                </div>

                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text text-2xl font-medium">Email</span>
                    
                </label>
                <input {...register("email")} type="email" required placeholder="Your Email" className="input input-bordered w-full max-w-sm" />

                </div>

                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text text-2xl font-medium">Photo</span>
                    
                </label>
                <input {...register("img")} type="url" required placeholder="Img Link" className="input input-bordered w-full max-w-sm" />

                </div>
                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text text-2xl font-medium">Password</span>
                    
                </label>
                <input {...register("pass")} type="password" required placeholder="Password" className="input input-bordered w-full max-w-sm" />

                </div>

                    
                       
                       <button type="submit" className="btn-wide py-2 rounded-md bg-[#284b63] text-white text-xl">Register</button>


                       <GoogleLogin></GoogleLogin>
                    
                    

                </form>
                    </div>
                    {/* form */}
                    {/* svg */}
                    <div className="flex-1">
                    <img src={registerSvg} alt="" />
                    </div>
                    {/* svg */}


        </div>
        </div>
    );
};

export default Register;