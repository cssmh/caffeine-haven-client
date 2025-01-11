import { createBrowserRouter } from "react-router-dom";
import Root from "./MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import AddNewItem from "../Pages/AdminDashboard/AddNewItem/AddNewItem";
import OurMenus from "../Pages/OurMenus";
import AllUsers from "../Pages/AdminDashboard/AllUsers/AllUsers";
import AllItems from "../Pages/AdminDashboard/AllItems/AllItems";
import UpdateItem from "../Pages/AdminDashboard/UpdateItem";
import StoryHub from "../Pages/StoryHub/StoryHub";
import FindATable from "../Pages/FindATable/FindATable";
import AllReservation from "../Pages/AdminDashboard/AllReservation/AllReservation";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import MyCart from "../Pages/MyCart/MyCart";
import Coupons from "../Pages/AdminDashboard/Coupons/Coupons";
import Checkout from "../Pages/Checkout/Checkout";
import PrivateRoute from "../Router/PrivateRoute/PrivateRoute";
import AdminRoute from "../Router/AdminRoute/AdminRoute";
import Dashboard from "./Dashboard";
import AdminStatistics from "../Pages/AdminDashboard/AdminStatistics/AdminStatistics";
import CheckoutSuccess from "../Pages/Checkout/CheckoutSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
