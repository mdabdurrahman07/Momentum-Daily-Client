import { NavLink, Outlet } from "react-router-dom";
import logo from '../assets/New folder/logos/logo-no-background.png'

const Dashboard = () => {
    return (
        <div className="flex">
            {/* navs */}
            <section className="w-72 bg-[#3c6e71]  min-h-screen mx-auto">
            <div className=" text-center mt-5 mb-20">
                    <div className="flex justify-center"><img src={logo} alt="" className="w-44" /></div>
                </div>

                {/* navs all */}

                <ul className="space-y-8">
                    <li className="text-white text-lg font-bold text-center">
                    <NavLink
        to="/dashboard/adminHome"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#284b63] text-white" : ""
        }
        >
      Admin Home  
        </NavLink>  
                    </li>
                    <li className="text-white text-lg font-bold text-center">
                    <NavLink
        to="/dashboard/allUsers"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#284b63] text-white" : ""
        }
        >
     All Users  
        </NavLink>  
                    </li>
                    <li className="text-white text-lg font-bold text-center">
                    <NavLink
        to="/dashboard/allArticles"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#284b63] text-white" : ""
        }
        >
     All Articles  
        </NavLink>  
                    </li>
                    <li className="text-white text-lg font-bold text-center">
                    <NavLink
        to="/dashboard/addPublisher"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#284b63] text-white" : ""
        }
        >
     Add Publisher  
        </NavLink>  
                    </li>
                    <div className="divider p-2 divider-warning"></div>

                    <li className="text-white text-lg font-bold text-center">
                    <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#284b63] text-white" : ""
        }
        >
     Home  
        </NavLink>  
                    </li>
                </ul>
            </section>
            {/* content */}
            <section className="flex-1 min-h-full bg-[#d9d9d9]">
            <Outlet></Outlet>
            </section>
            
        </div>
    );
};

export default Dashboard;