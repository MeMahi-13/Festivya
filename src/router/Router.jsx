import {
  createBrowserRouter
} from "react-router";
import AuthLayout from "../layout/AuthLayout";
import HomeLayout from "../layout/HomeLayout";
import AddService from "../pages/AddService";
import AllServices from '../pages/AllServices/AllServices';
import BookedServices from "../pages/bookings/BookedServices";
import Error from "../pages/Error";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import ManageServices from "../pages/ManagingServices.jsx/ManageServices";
import Register from "../pages/Register";
import ServiceBooking from "../pages/ServiceBooking";
import ServiceDetails from "../pages/ServiceDetails";
import ServiceToDo from "../pages/ServiceToDo";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'all-services',
        element: <AllServices />,
      },
      {
        path: 'services/:id',
        element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://fest-olive.vercel.app/services/${params.id}`)
      },
      {
        path: '/bookings/:id',
        element: <PrivateRoute><ServiceBooking /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://fest-olive.vercel.app/services/${params.id}`)
        ,
      },
      {
         path: '/manageServices',
        element:<PrivateRoute> <ManageServices /></PrivateRoute>,
      },
      {
         path: '/bookedServices',
        element: <PrivateRoute><BookedServices /></PrivateRoute>,
      },
       {
         path: '/addService',
        element: <PrivateRoute><AddService /></PrivateRoute>,
      },
       {
         path: '/serviceToDo',
        element: <PrivateRoute><ServiceToDo /></PrivateRoute>,
      }


    ]

  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
    ],
  },
]);
