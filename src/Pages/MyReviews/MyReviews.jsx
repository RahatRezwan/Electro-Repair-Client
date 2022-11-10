import { Avatar } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewEditBtn from "./ReviewEditBtn/ReviewEditBtn";
import ReviewDeleteBtn from "./ReviewDeleteBtn/ReviewDeleteBtn";

const MyReviews = () => {
   const [reviews, setReviews] = useState([]);
   const { user } = useContext(AuthContext);
   window.scroll(0, 0);
   useEffect(() => {
      fetch(`http://localhost:5000/reviews?email=${user?.email}`)
         .then((res) => res.json())
         .then((data) => {
            setReviews(data);
         });
   }, [user?.email]);

   return (
      <div className="max-w-[1024px] mx-auto min-h-screen py-14">
         <h1 className="text-2xl font-bold mb-4">All of my reviews</h1>
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
                  <ReviewEditBtn
                     comment={review.comment}
                     _id={review._id}
                     reviews={reviews}
                     setReviews={setReviews}
                  />
                  <ReviewDeleteBtn _id={review._id} reviews={reviews} setReviews={setReviews} />
               </div>
            </div>
         ))}
      </div>
   );
};

export default MyReviews;
