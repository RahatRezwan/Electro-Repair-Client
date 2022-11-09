import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import { AddService, Blogs, Home, Login, MyReviews, Register, Services } from "../../Pages";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";

export const routes = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/services",
            element: <Services />,
         },
         {
            path: "/addService",
            element: (
               <PrivateRoutes>
                  <AddService />
               </PrivateRoutes>
            ),
         },
         {
            path: "/my-reviews",
            element: (
               <PrivateRoutes>
                  <MyReviews />
               </PrivateRoutes>
            ),
         },
         {
            path: "/blogs",
            element: <Blogs />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
      ],
   },
]);
