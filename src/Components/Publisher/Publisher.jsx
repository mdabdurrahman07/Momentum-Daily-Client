import toast from "react-hot-toast";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useState } from "react";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";

const Publisher = () => {
    const AxiosPublic = UseAxiosPublic()
    const [publisher , Setpublisher ] = useState([])
    useEffect(()=>{
        AxiosPublic.get('/publisher')
    .then(res =>{
        // console.log(res?.data)
        Setpublisher(res?.data)
    })
    .catch(error=>{
        toast.error(error)
    })
    },[AxiosPublic])
    // console.log(publisher)
    return (
      <div className="my-6">
         <div className="font-semibold text-4xl text-[#3c6e71] p-3 text-center mb-3">
            <Typewriter
            words={['All Publishers']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            
          />
            </div>
            <Marquee className="my-5">
                {
                    publisher.map(items=> <div key={items._id}>
                       
                            <img src={items.image} alt=""  className="w-40 ml-16"/>
                       
                    </div>)
                }
            </Marquee>
        </div>
    );
};

export default Publisher;