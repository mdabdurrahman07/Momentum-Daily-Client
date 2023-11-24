import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const MyProfile = () => {
    const {user} = UseAuth()
    return (
        <div className="flex justify-center items-start">
            
         {
            user &&   <div className="card bg-white shadow-xl my-10">
                <h1 className="text-center font-bold text-xl py-2 text-[#284b63]">Profile</h1>
            <figure className="px-10 pt-10">
                <img src={user?.photoURL} alt="User Photo" className="rounded-full w-40 h-40" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{user?.displayName} </h2>
                <p>Email: {user?.email}</p>
                <div className="card-actions mt-3">
                <Link to="/">
                <button className="bg-emerald-700 text-white font-medium text-lg  rounded-2xl p-2 mr-3">
                    Home
                </button>
                </Link>
                <button className="bg-sky-700 text-white font-medium text-lg  rounded-2xl p-2">
                    Update Profile
                </button>
                </div>
            </div>
            </div>
         }
        </div>
    );
};

export default MyProfile;