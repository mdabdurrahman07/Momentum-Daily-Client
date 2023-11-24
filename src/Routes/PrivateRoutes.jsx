/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoutes = ({children}) => {
    const {user , loading} = UseAuth()
    const location = useLocation()

    if(loading){
        <progress className="progress w-56"></progress> 
    }
    if(user){
        children
    }


    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;