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
// import Error from "../Components/Error/Error";


    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          // errorElement: <Error></Error>,
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
            },
            {
              path: '/myProfile',
              element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
            },
            {
              path: '/premiumDetails/:id',
              element: <PrivateRoutes><PremiumDetails></PremiumDetails></PrivateRoutes>,
              loader: ({params}) => fetch(`http://localhost:5000/allArticles/${params.id}`)
            },
            {
              path: '/articlesDetails/:id',
              element: <PrivateRoutes><ArticlesDetails></ArticlesDetails></PrivateRoutes>,
              loader: ({params}) => fetch(`http://localhost:5000/allArticles/${params.id}`)
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
              element: <AdminHome></AdminHome>
            },
            {
              path: '/dashboard/allUsers',
              element: <AllUsers></AllUsers>
            },
            {
              path: '/dashboard/allArticles',
              element: <AllArticlesList></AllArticlesList>
            },
            {
              path: '/dashboard/addPublisher',
              element: <AllPublisher></AllPublisher>
            }
          ]
        }
      ]);

export default router      
    



