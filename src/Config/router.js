import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import Card from "../pages/Card"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import CheckOut from '../pages/CheckOut';
import ProductDetail from "../pages/ProductDetail";
import Header from '../Conponents/Header/Header';
import Footer from '../Conponents/Footer/Footer';
import ProtectedRoutes from './ProtectedRoutes';


const router = createBrowserRouter([

    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/SignUp",
        element: <SignUp />
    },

    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "/",
                element: <Home />

            },
            {
                path: "/Shop",
                element: <Shop />
            }
            ,
            {
                path: "/Shop/:id",
                element: <ProductDetail />
            }
            ,
            {
                path: "/Card",
                element: <Card />
            },

            {
                path: "/CheckOutpage",
                element: < ProtectedRoutes Children={<CheckOut />} />
                // <CheckOut />


                // <ProtectedRoutes>
                //     <CheckOut />
                // </ProtectedRoutes>
            }
        ]
    },
    {
        path: "/",
        element: <Footer />
    }
])

function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Router