import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/HomePage/Home";
import OurMenus from "../Pages/OurMenus";
import AboutUs from "../Pages/HomePage/About";
import Contact from "../Pages/Contact";
import StoryHub from "../Pages/StoryHub/StoryHub";
import FindATable from "../Pages/FindATable";
import PrivateRoute from "./PrivateRoute";
import MyCart from "../Pages/MyCart";
import Checkout from "../Pages/Checkout/Checkout";
import CheckoutSuccess from "../Pages/Checkout/CheckoutSuccess";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import AdminRoute from "./AdminRoute";
import Dashboard from "./Dashboard";
import AdminStatistics from "../Pages/AdminDashboard/AdminStatistics";
import AddNewItem from "../Pages/AdminDashboard/AddNewItem";
import AllUsers from "../Pages/AdminDashboard/AllUsers";
import AllItems from "../Pages/AdminDashboard/AllItems";
import UpdateItem from "../Pages/AdminDashboard/UpdateItem";
import AllReservation from "../Pages/AdminDashboard/AllReservation";
import Coupons from "../Pages/AdminDashboard/Coupons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allMenus",
        element: <OurMenus />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/storyHub",
        element: <StoryHub />,
      },
      {
        path: "/findATable",
        element: <FindATable />,
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkoutSuccess",
        element: (
          <PrivateRoute>
            <CheckoutSuccess />
          </PrivateRoute>
        ),
      },
    ],
  },
  // register and sign in page
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },

  // admin dashboard pages
  {
    path: "dashboard",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "adminStatistics",
        element: <AdminStatistics />,
      },
      {
        path: "addNewItem",
        element: <AddNewItem />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "allItems",
        element: <AllItems />,
      },
      {
        path: "updateItem/:id",
        element: <UpdateItem />,
      },
      {
        path: "allReservation",
        element: <AllReservation />,
      },
      {
        path: "coupons",
        element: <Coupons />,
      },
    ],
  },
]);

export default router;
