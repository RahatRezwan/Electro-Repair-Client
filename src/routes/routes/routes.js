import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import { AddService, Blogs, Home, Login, MyReviews, Register, Services } from "../../Pages";

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
            element: <AddService />,
         },
         {
            path: "/my-reviews",
            element: <MyReviews />,
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
