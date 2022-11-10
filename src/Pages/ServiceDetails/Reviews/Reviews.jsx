import { Avatar } from "flowbite-react";
import React from "react";

const Reviews = ({ reviews }) => {
   return (
      <div>
         <h1 className="text-2xl font-bold my-3">
            {reviews.length === 0 ? "No Reviews Found" : "All Reviews"}
         </h1>
         {reviews.map((review) => (
            <div
               key={review._id}
               className="border rounded-md p-3 flex items-center justify-start gap-3 mb-2"
            >
               <Avatar img={review.userPhoto} rounded={true} />
               <div>
                  <h4>
                     <span className="font-bold">{review.userName}</span> ({" "}
                     <small>{review.userEmail}</small> )
                  </h4>
                  <p>{review.comment}</p>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Reviews;
