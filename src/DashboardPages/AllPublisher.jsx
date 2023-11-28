import { useForm } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllPublisher = () => {
    const AxiosSecure = UseAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        
        console.log(data)
        const publisherInfo = {
            PublisherName: data?.publisher,
            image: data?.image

        }
        AxiosSecure.post('/publisher' , publisherInfo)
        .then(res=> {
            console.log(res?.data)
            if(res?.data.acknowledged){
                reset()
                Swal.fire({
                    icon: "success",
                    title: "Upload Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        .catch(error=>{
            console.log(error)
            toast.error(error)
        })

    
    }
    return (
        <div className="max-w-5xl p-4 mx-auto mt-40">
            <div className="bg-white p-11 space-y-10">
            <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full ">
            <div className="label">
                <span className="text-2xl font-bold ">Publisher Name</span>
                
            </div>
            <input {...register("publisher")} type="text" placeholder="BBC,CNN" className="input input-bordered w-full " />
          
            </label>
            <label className="form-control w-full ">
            <div className="label">
                <span className="text-2xl font-bold ">Img Url</span>
                
            </div>
            <input {...register("image")} type="url" placeholder="https" className="input input-bordered w-full " />
          
            </label>
      
         <div className="flex justify-center mt-5">
            <button type="submit" className="px-10 py-3 bg-[#3c6e71] text-white text-xl flex gap-4 items-center font-semibold rounded-lg">Upload 
            <IoCloudUploadOutline className=" text-xl font-semibold"></IoCloudUploadOutline></button>
         </div>
    </form>
            </div>
        </div>
    );
};

export default AllPublisher;