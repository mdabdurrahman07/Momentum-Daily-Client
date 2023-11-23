import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
    
    <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }
        >
         <li className="text-base font-semibold"><a>Home</a></li>
        </NavLink>
    <NavLink
        to="/addArticles"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }
        >
        <li className="text-base font-semibold"><a>Add Articles</a></li>
        </NavLink>
    <NavLink
        to="/allArticles"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }
        >
     <li className="text-base font-semibold"><a>All Articles</a></li>  
        </NavLink>
    {/* <NavLink
        to="/subscription"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }
        >
        Dashboard
        </NavLink>; */}
    <NavLink
        to="/myArticles"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }
        >
     <li className="text-base font-semibold"><a>My Articles</a></li>   
        </NavLink>
    {/* <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }
        >
        Premium artcles
        </NavLink>; */}
    </>
    return (
        <div className="max-w-7xl mx-auto p-3">
                        <div className="navbar bg-base-100 shadow-lg p-3">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Momentum Daily</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <label  className=" avatar">
        <div className="w-10 rounded-full">
          <img alt="https://i.ibb.co/hLpjMDM/football-461340-640.jpg" />
        </div>
      </label>
  </div>
</div>
        </div>
    );
};

export default Navbar;