import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Spinner from "../../Pages/Shared/Spinner/Spinner";

const PrivateRoutes = ({ children }) => {
   const { user, loader } = useContext(AuthContext);
   const location = useLocation();
   if (loader) {
      return <Spinner />;
   }
   if (user) {
      return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
