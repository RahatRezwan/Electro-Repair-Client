import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Spinner from "../../Pages/Shared/Spinner/Spinner";

const PrivateRoutes = ({ children }) => {
   const { user, loader } = useContext(AuthContext);
   if (loader) {
      return <Spinner />;
   }
   if (user) {
      return children;
   }
   return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
