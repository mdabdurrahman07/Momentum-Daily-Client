import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Routes/Main";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register/Register";


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
      ]);

export default router      
    



