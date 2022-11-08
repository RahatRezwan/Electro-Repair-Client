import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";

const routes = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
   },
]);
