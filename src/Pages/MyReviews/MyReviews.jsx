import { Avatar } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewEditBtn from "./ReviewEditBtn/ReviewEditBtn";
import ReviewDeleteBtn from "./ReviewDeleteBtn/ReviewDeleteBtn";
import useSetTitle from "../../hooks/useSetTitle";
import Spinner from "../Shared/Spinner/Spinner";

const MyReviews = () => {
   useSetTitle("My Reviews");
   const [reviews, setReviews] = useState([]);
   const [spin, setSpin] = useState(true);
   const { user, logoutAUser } = useContext(AuthContext);

   window.scroll(0, 0);

   useEffect(() => {
      fetch(`https://electro-repair-server.vercel.app/reviews-by-email?email=${user?.email}`, {
         headers: {
            authorization: `Bearer ${localStorage.getItem("electro_repair_token")}`,
         },
      })
         .then((res) => {
            if (res.status === 401 || res.status === 403) {
               logoutAUser();
            }
            return res.json();
         })
         .then((data) => {
            setReviews(data);
            setSpin(false);
         });
   }, [user?.email, logoutAUser]);

   if (spin) {
      return <Spinner />;
   }

   if (reviews.length === 0) {
      return (
         <div className="max-w-[1024px] mx-auto min-h-[600px] flex justify-center items-center">
            <h2 className="text-2xl font-extrabold">No Reviews Found</h2>
         </div>
      );
   }

   return (
      <div className="max-w-[1024px] mx-auto min-h-screen py-14">
         <h1 className="text-2xl font-bold mb-4">All of my reviews</h1>
         {reviews.map((review) => (
            <div key={review._id} className="border rounded-md p-3 mb-4 shadow-md">
               <div className="mb-3">
                  <h1 className="font-bold mb-2">{review.serviceName}</h1>
                  <hr />
               </div>
               <div className="flex justify-between items-center">
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
            </div>
         ))}
      </div>
   );
};

export default MyReviews;
