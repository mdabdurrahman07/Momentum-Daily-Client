import {  useEffect, useState } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";


const Plans = () => {
    const [items , setItems] = useState([])
    const AxiosPublic = UseAxiosPublic()
        useEffect(()=>{
            AxiosPublic.get('/plans')
            .then(res=>{
                setItems(res.data)
                // console.log(res.data)
            })
            .catch(error=>{
                console.log(error)
            })
        },[AxiosPublic])
    return (
        <div className="my-6">
           <div className="font-semibold text-4xl text-[#3c6e71] p-3 mb-6 text-center">
            <Typewriter
            words={['Our Plans']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            
          />
          </div>
            <div className="grid grid-cols-1  md:grid-cols-3 justify-items-center items-center gap-5">
                {
                    items.map(value =>  <div key={value._id} className=" w-80 bg-base-100 border-[#3c6e71] border-4">
                    <figure><img src={value.img} alt="Shoes" className="w-48 h-48 mx-auto p-4" /></figure>
                    <div className="card-body">
                        <h2 className=" text-center text-red-400 text-2xl font-bold">{value.packages}</h2>
                        <p className="text-4xl font-bold text-center text-emerald-500">${value.price}</p>
                        <p className=" text-center text-red-400 text-xl font-semibold">{value.times}</p>
                        <p className="text-left text-xl font-bold bg-green-500 text-white w-20">Features</p>
                        <p className="font-medium text-lg">*{value.advantageone}</p>
                        <p  className="font-medium text-lg">*{value.advantagetwo}</p>
                        <p  className="font-medium text-lg">*{value.advantagethree}</p>
                        <div className="card-actions justify-center">
                         
                           {
                            value.price > 1 ? 
                            <Link to={`/paymentGateway/${value._id}`}>
                           <button className="bg-[#284b63] text-white w-full text-2xl font-medium p-2 rounded-xl">Subscribe Now</button> 
                           </Link> : <button className="bg-[#284b63] text-white w-full text-2xl font-medium p-2 rounded-xl">Free</button> }
                            
                         
                        </div>
                    </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Plans;