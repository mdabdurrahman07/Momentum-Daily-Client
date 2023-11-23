import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className="max-w-7xl mx-auto">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Main;