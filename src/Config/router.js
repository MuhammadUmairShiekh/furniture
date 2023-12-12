import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Card from "../pages/Card";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import CheckOut from "../pages/CheckOut";
import ProductDetail from "../pages/ProductDetail";
import Header from "../Conponents/Header/Header";
import Footer from "../Conponents/Footer/Footer";
import ProtectedRoutes from "./ProtectedRoutes";
import AllProduct from "../adminPanal/AllProduct";
import AddProduct from "../adminPanal/AddProduct";
import AdminNav from "../adminPanal/AdminNav";
import DashBoard from "../adminPanal/DashBoard";

const router = createBrowserRouter([
  {
    path: "/AdminNav",
    element: <ProtectedRoutes Children={<AdminNav />} />,
  },
  {
    path: "/dashBoard/add-product",
    element: <ProtectedRoutes Children={<AddProduct />} />,
  },
  {
    path: "/dashBoard/all-product",
    element: <ProtectedRoutes Children={<AllProduct />} />,
  },
  {
    path: "/dashBoard",
    element: <ProtectedRoutes Children={<DashBoard />} />,
  },

  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/Shop/:id",
        element: <ProductDetail />,
      },
      {
        path: "/Card",
        element: <Card />,
      },

      {
        path: "/CheckOutpage",
        element: <ProtectedRoutes Children={<CheckOut />} />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/",
    element: <Footer />,
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
