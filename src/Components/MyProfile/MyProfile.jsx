import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { FaHome ,FaEdit  } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { CiLogout } from "react-icons/ci";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";






const MyProfile = () => {
    
    const {user , logout} = UseAuth()
    const AxiosPublic = UseAxiosPublic()
    const [usersState, setUsersState] = useState(null);
   useEffect(()=>{
    AxiosPublic.get(`/users?email=${user.email}`)
    .then(res => {
        // console.log(res.data)
        setUsersState(res.data)
       
       
    })
    
    .catch(error=> {
        console.log(error)
    })
   },[AxiosPublic, user.email])
    
    const handleLogout = () => {
        logout()
        .then(()=>{

        })
        .catch(()=>{

        })
    }
    const handleUpadteUser = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const displayName = form.get('displayName')
        const photoURL = form.get('photoURL')
        
        const updatedInfo = {displayName,photoURL}

        AxiosPublic.put(`/users/${usersState?._id}` , updatedInfo)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                toast.success('Your Profile Updated Successfully')
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
//    console.log(usersState?.email)
    return (
        <div className="flex justify-center items-start">
            <Helmet>
            <title>Momentum Daily | My Profile</title>
             </Helmet>
         {
            user?.email == usersState?.email && <div className="card w-96 bg-white shadow-xl my-10">
                <h1 className="text-center font-bold text-xl py-2 text-[#284b63]">Profile</h1>
            <figure className="px-10 pt-10">
                <img src={usersState?.photoURL} alt="User Photo" className="rounded-full w-40 h-40" />
            </figure>
            <div className="card-body  items-center text-center">
                <h2 className="card-title">{usersState?.displayName} </h2>
                <p>Email: {usersState?.email}</p>
                <div className="card-actions space-x-5 mt-2">
                <Link to="/">
                <button className="bg-emerald-700 text-white font-medium text-lg  rounded-2xl p-2 mr-3">
                   <FaHome></FaHome>
                </button>
                </Link>
               
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="bg-sky-700 text-white font-medium text-lg  rounded-2xl p-2" onClick={()=>document.getElementById('my_modal_3').showModal()}><FaEdit></FaEdit></button>
                <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Update Profile</h3>
                    <form onSubmit={handleUpadteUser}>
                        <div className="form-control w-full max-w-xs mx-auto">
                      <label className="label">
                      <span className="label-text">Name</span>
                       
                       </label>
                       <input type="text" name="displayName" defaultValue={usersState?.displayName} className="input input-bordered w-full max-w-xs" />
                       
                       </div>
                       <div className="form-control w-full max-w-xs mx-auto">
                      <label className="label">
                      <span className="label-text">Email</span>
                       
                       </label>
                       <input type="email" readOnly defaultValue={usersState?.email} className="input input-bordered w-full max-w-xs" />
                       
                       </div>   
                       <div className="form-control w-full max-w-xs mx-auto">
                      <label className="label">
                      <span className="label-text">Img Link</span>
                       
                       </label>
                       <input type="url" name="photoURL" defaultValue={usersState?.photoURL} className="input input-bordered w-full max-w-xs" />
                       
                       </div> 

                       <button type="submit" className="px-4 py-2 bg-emerald-500 text-white text-xl rounded-xl font-medium mt-4">Update</button>
                    </form>
                </div>
                </dialog>
                </div>
               
                <button onClick={handleLogout} className="bg-red-500 text-white font-bold text-2xl rounded-full p-1 mr-3 flex items-center gap-4 mt-3">
                  <CiLogout></CiLogout>
                </button>
                
            </div>
            </div>
         }
        </div>
    );
};

export default MyProfile;