import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";

export const routes = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
   },
]);
