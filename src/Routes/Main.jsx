import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";
import Footer from "../Pages/Footer/Footer";

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className="max-w-7xl mx-auto">
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;