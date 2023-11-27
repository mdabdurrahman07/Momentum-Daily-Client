import Lottie from "lottie-react";
import errorAni from '../../assets/errorAnimations/Animation - 1701095148627.json'
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1 className="text-5xl my-8 font-bold text-red-500 text-center">404 Error</h1>
            <div className="max-w-3xl mx-auto">
            <Lottie animationData={errorAni}></Lottie>
            
                <p className="text-center text-3xl font-bold text-red-500">
                    <i>{error.statusText || error.message}</i>
                </p>
             <Link  className="flex justify-center my-4" to="/"><button className="px-6 py-2 bg-[#3c6e71] font-semibold text-xl rounded-lg text-white ">Back To Home
             </button></Link>
            </div>
        </div>
    );
};

export default Error;