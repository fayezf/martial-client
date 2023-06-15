import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Instructors from "../pages/InstructorPage/InstructorAll/Instructors";
import Classes from "../pages/ClassesPage/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import MyClass from "../pages/Dashboard/MyClass/MyClass";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            path: 'selectedclasses',
            element: <MyClasses></MyClasses>
          },
          {
            path: 'payment',
            element: <Payment></Payment>
          },
          {
            path: 'history',
            element: <PaymentHistory></PaymentHistory>
          },
          
          // admin routes
          {
            path: 'allusers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
          },
          {
            path: 'addclass',
            element: <AddClass></AddClass>
          },
          {
            path: 'myclass',
            element: <MyClass></MyClass>
          },
          {
            path: 'allclasses',
            element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          }
        ]
      }

    ]
  },
  // {
  //   path: 'dashboard',
  //   element: <Dashboard></Dashboard>,
  //   children: [
  //     {
  //       path: 'myclasses',
  //       element: <MyClasses></MyClasses>
  //     }
  //   ]
  // },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);