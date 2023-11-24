/* eslint-disable react/no-unescaped-entities */
import { useForm } from 'react-hook-form';
import './login.css'
import GoogleLogin from '../../Components/GoogleLogin/GoogleLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import toast from 'react-hot-toast';
const Login = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const {login} = UseAuth()
    const { register, handleSubmit , reset } = useForm()
    const from = location.state?.from?.pathname || "/";
    const onSubmit = (data) => {
    const email = data?.email
    const password = data?.pass
    login(email , password)
    .then(res =>{
        console.log(res)
        if(res){
            toast.success('login successful')
            navigate(from , {replace : true})
            reset()
        }
    })
    .catch(error => {
        console.log(error)
    })

    
  }
    return (
        <div className="login">
           <section  className="flex justify-around items-center py-52">
           <div className='bg-white'>

<form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-5">

<h1 className="text-center font-semibold text-2xl text-[#3c6e71]">Login Here</h1>

<div className="form-control w-full  max-w-sm">
    <label className="label">
        <span className="label-text text-2xl font-medium">Email</span>
        
    </label>
    <input {...register("email")} type="email" required placeholder="Your Email" className="input input-bordered w-full max-w-sm" />

    </div>

    <div className="form-control w-full  max-w-sm">
    <label className="label">
        <span className="label-text text-2xl font-medium">Password</span>
        
    </label>
    <input {...register("pass")} type="password" required placeholder="Password" className="input input-bordered w-full max-w-sm" />

    </div>  

       
        <div className="flex justify-center my-3">
        <button type="submit" className="btn-wide py-2 rounded-md bg-[#284b63] text-white text-xl">Login</button>
        </div>


          
        <GoogleLogin></GoogleLogin>

        <h1 className="font-medium text-xl text-center">Don't have an account ? <span><Link to="/login"><u>Register</u></Link></span></h1>


</form>

</div>
           </section>
        </div>
    );
};

export default Login;