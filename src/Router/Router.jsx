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
import MyProfile from "../Components/MyProfile/MyProfile";
import PremiumDetails from "../Pages/PremiumDetails/PremiumDetails";
import ArticlesDetails from "../Pages/ArticlesDetails/ArticlesDetails";
import Dashboard from "../Routes/Dashboard";
import AllUsers from '../DashboardPages/AllUsers'
import AdminHome from '../DashboardPages/AdminHome'
import AllPublisher from '../DashboardPages/AllPublisher'
import AllArticlesList from '../DashboardPages/AllArticlesList'
import UpdateDetails from "../Pages/UpdateDetails/UpdateDetails";
import MyArticlesDetails from "../Pages/MyArticlesDetails/MyArticlesDetails";
import PaymentGateWay from "../Pages/PaymentGateway/PaymentGateWay";
import Premium from "../Pages/Premium/Premium";
import AdminRoutes from "../Routes/AdminRoutes";

import Error from "../Components/Error/Error";


    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          errorElement: <Error></Error>,
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
              path: '/paymentGateway/:id',
              element: <PrivateRoutes><PaymentGateWay></PaymentGateWay></PrivateRoutes>,
              loader: () => fetch('https://momentum-daily-server-4j2b9uwm5.vercel.app/plans')

            },
            {
              path: '/allArticles',
              element: <AllArticles></AllArticles>
            },
            {
              path: '/myArticles',
              element: <PrivateRoutes><MyArticles></MyArticles></PrivateRoutes>
            },
            {
              path: '/subscription',
              // make this private
              element: <Subscription></Subscription>
            },
            {
              path: '/PremiumAccount',
              element:<PrivateRoutes> <Premium></Premium></PrivateRoutes>
            },
            {
              path: '/myProfile',
              element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
            },
            {
              path: '/premiumDetails/:id',
              element: <PrivateRoutes><PremiumDetails></PremiumDetails></PrivateRoutes>,
              loader: ({params}) => fetch(`https://momentum-daily-server-4j2b9uwm5.vercel.app/allarticles/${params.id}`)
            },
            {
              path: '/articlesDetails/:id',
              element: <PrivateRoutes><ArticlesDetails></ArticlesDetails></PrivateRoutes>,
              loader: ({params}) => fetch(`https://momentum-daily-server-4j2b9uwm5.vercel.app/allarticles/${params.id}`)
            },
            {
              path: '/updateDetails/:id',
              element: <PrivateRoutes><UpdateDetails></UpdateDetails></PrivateRoutes>,
              loader: () => fetch('https://momentum-daily-server-4j2b9uwm5.vercel.app/allarticles')
            },
            {
              path: '/myarticles/details/:id',
              element: <PrivateRoutes><MyArticlesDetails></MyArticlesDetails></PrivateRoutes>,
              loader: ({params}) => fetch(`https://momentum-daily-server-4j2b9uwm5.vercel.app/allarticles/${params.id}`)

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
        },
        {

          path: '/dashboard',
          element: <Dashboard></Dashboard>,
          children: [

            {
              path: '/dashboard/adminHome',
              element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
            },
            {
              path: '/dashboard/allUsers',
              element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
              path: '/dashboard/allArticles',
              element:  <AdminRoutes>  <AllArticlesList></AllArticlesList></AdminRoutes>
            },
            {
              path: '/dashboard/addPublisher',
              element: <AdminRoutes><AllPublisher></AllPublisher></AdminRoutes>
            }
          ]
        }
      ]);

export default router      
    



