import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Routes/Main";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddArticles from '../Pages/AddArticles/AddArticles'
import AllArticles from '../Pages/AllArticles/AllArticles'
import MyArticles from '../Pages/MyArticles/MyArticles'
import Subscription  from '../Pages/Subscription/Subscription'
import PrivateRoutes from "../Routes/PrivateRoutes";


    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
              path: '/addArticles',
              element: <PrivateRoutes><AddArticles></AddArticles></PrivateRoutes>
            },
            {
              path: '/allArticles',
              element: <AllArticles></AllArticles>
            },
            {
              path: '/myArticles',
              element: <MyArticles></MyArticles>
            },
            {
              path: '/subscription',
              element: <Subscription></Subscription>
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
    



