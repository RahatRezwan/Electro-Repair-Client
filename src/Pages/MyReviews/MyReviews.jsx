import { Avatar } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyReviews = () => {
   const [reviews, setReviews] = useState([]);
   const { user } = useContext(AuthContext);
   useEffect(() => {
      fetch(`http://localhost:5000/reviews?email=${user?.email}`)
         .then((res) => res.json())
         .then((data) => {
            setReviews(data);
         });
   }, [user?.email]);
   return (
      <div className="max-w-[1320px] mx-auto min-h-screen py-16">
         {reviews.map((review) => (
            <div
               key={review._id}
               className="border rounded-md p-3 flex justify-between items-center"
            >
               <div className="flex items-center justify-start gap-3 mb-2">
                  <Avatar img={review.userPhoto} rounded={true} />
                  <div>
                     <h4>
                        <span className="font-bold">{review.userName}</span> ({" "}
                        <small>{review.userEmail}</small> )
                     </h4>
                     <p>{review.comment}</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <FaEdit className="w-6 h-6 text-blue-600" />
                  <FaTrashAlt className="w-6 h-6 text-red-600" />
               </div>
            </div>
         ))}
      </div>
   );
};

export default MyReviews;
