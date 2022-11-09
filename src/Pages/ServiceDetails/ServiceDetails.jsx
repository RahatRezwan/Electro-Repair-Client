import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useSetTitle from "../../hooks/useSetTitle";
import Reviews from "./Reviews/Reviews";
import WriteCommentForm from "./WriteCommentForm/WriteCommentForm";

const ServiceDetails = () => {
   const { user } = useContext(AuthContext);
   const service = useLoaderData();
   const { _id, imgUrl, title, author, price, description, duration } = service;

   useSetTitle(`${title}`);

   return (
      <div className="max-w-[1320px] mx-auto flex gap-5 mt-11">
         <div className="w-[70%] border rounded-md p-5">
            {/* service details */}
            <div className="mb-7">
               <img src={imgUrl} alt="" className="mb-2" />
               <h1 className="text-4xl font-extrabold mb-2">{title}</h1>
               {/* serviceman */}
               <div className="flex justify-start gap-10">
                  <p className="font-bold">Serviceman: {author}</p>
                  <p className="font-bold">Price: {price}</p>
                  <p className="font-bold">Duration: {duration}</p>
               </div>
               <h4 className="text-2xl font-bold">Description:</h4>
               <p className="text-justify">{description}</p>
            </div>

            {/* Write comment */}
            <div>
               <h1 className="text-3xl font-bold mb-4">
                  Add Your Review{" "}
                  {user?.uid ? undefined : (
                     <span>
                        (
                        <Link to="/login" className="text-blue-600">
                           Login
                        </Link>{" "}
                        to add a review)
                     </span>
                  )}
               </h1>
               <WriteCommentForm user={user} id={_id} />
            </div>

            {/* reviews section */}
            <Reviews serviceId={_id} />
         </div>

         {/* Side Bar */}
         <div className="w-[30%] border rounded-md p-5 relative text-center">
            <div className="sticky top-10">
               <div>Top comments</div>
               <div>Other Services</div>
            </div>
         </div>
      </div>
   );
};

export default ServiceDetails;
