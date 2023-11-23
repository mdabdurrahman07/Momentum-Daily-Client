import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Routes/Main";
import Home from "../Components/Home/Home";


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
      ]);

export default router      
    



