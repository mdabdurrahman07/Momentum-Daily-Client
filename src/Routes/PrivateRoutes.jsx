/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { MagnifyingGlass } from "react-loader-spinner";

const PrivateRoutes = ({children}) => {
    const {user , loading} = UseAuth()
    const location = useLocation()

    if(loading){
      return  <MagnifyingGlass
      visible={true}
      height="100vh"
      width="80%"
      
      ariaLabel="MagnifyingGlass-loading"
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor = '#c0efff'
      color = '#e15b64'
    />
    }
    if(user){
      return  children
    }


    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;