import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "flowbite-react";
import { useContext } from "react";
import { SpinnerContext } from "./contexts/HomeSpinner/HomeSpinner";
import Spinner from "./Pages/Shared/Spinner/Spinner";

const CloseButton = ({ closeToast }) => <Button onClick={closeToast}>Ok</Button>;

function App() {
   const { spin } = useContext(SpinnerContext);
   if (spin) {
      return <Spinner />;
   }
   return (
      <div>
         <RouterProvider router={routes} />
         <ToastContainer
            position="top-center"
            autoClose={15000}
            theme="dark"
            closeButton={CloseButton}
         />
      </div>
   );
}

export default App;
