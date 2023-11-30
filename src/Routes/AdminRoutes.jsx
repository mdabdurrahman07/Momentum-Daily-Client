import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseAdmin from "../Hooks/UseAdmin";

// eslint-disable-next-line react/prop-types
const AdminRoutes = ({children}) => {
    const [isAdmin , isAdminLoading] = UseAdmin()
    const {user , loading} = UseAuth()
    const location = useLocation()
   if(loading || isAdminLoading){
    return <progress className="progress w-56"></progress>
   }
      if(user?.email && isAdmin){
        return children
      }
   return <Navigate to="/login" state={{form : location}}></Navigate>
};

export default AdminRoutes;