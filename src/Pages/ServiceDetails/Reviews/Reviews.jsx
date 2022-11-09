import { Avatar } from "flowbite-react";
import React, { useEffect, useState } from "react";

const Reviews = ({ serviceId }) => {
   const [reviews, setReviews] = useState([]);
   useEffect(() => {
      fetch(`http://localhost:5000/reviews?serviceId=${serviceId}`)
         .then((res) => res.json())
         .then((data) => {
            setReviews(data);
         });
   }, [serviceId]);

   return (
      <div>
         <h1 className="text-2xl font-bold my-3">All Comments</h1>
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
