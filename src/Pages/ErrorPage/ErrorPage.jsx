import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
   const error = useRouteError();
   return (
      <div className="min-h-screen w-full flex flex-col justify-center items-center">
         <h1 className="text-5xl font-bold mb-4">
            {error.status} - {error.statusText}
         </h1>
         <h2 className="text-xl font-bold">
            Go to{" "}
            <Link to="/">
               <span className="text-blue-500">Home</span>
            </Link>
         </h2>
      </div>
   );
};

export default ErrorPage;
