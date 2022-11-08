import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import { Home } from "../../Pages";

export const routes = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
      ],
   },
]);
