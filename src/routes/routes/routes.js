import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import {
   AddService,
   Blogs,
   Home,
   Login,
   MyReviews,
   Register,
   ServiceDetails,
   Services,
} from "../../Pages";
import AddBlogs from "../../Pages/AddBlogs/AddBlogs";
import BlogDetails from "../../Pages/BlogDetails/BlogDetails";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
export const routes = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
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
            path: "/services/:id",
            element: <ServiceDetails />,
            loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
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
            path: "/addBlog",
            element: (
               <PrivateRoutes>
                  <AddBlogs />
               </PrivateRoutes>
            ),
         },
         {
            path: "/blogs",
            element: <Blogs />,
            loader: async () => fetch("http://localhost:5000/blogs"),
         },
         {
            path: "/blogs/:id",
            element: <BlogDetails />,
            loader: async ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`),
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
