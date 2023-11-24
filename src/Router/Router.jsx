import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Routes/Main";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";


    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children: [
            {
                path: '/',
                element: <Home></Home>
            }
          ]

        },
        {
            path: '/register',
            element: <Register></Register>
        }
        ,
        {
            path: '/login',
            element: <Login></Login>
        }
      ]);

export default router      
    



