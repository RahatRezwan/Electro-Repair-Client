import { Button, Label, Textarea } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const WriteCommentForm = ({ title, id, setReviews, reviews }) => {
   const { user } = useContext(AuthContext);
   const handleSubmit = (event) => {
      event.preventDefault();
      const comment = event.target.comment.value;
      const serviceId = id;
      const serviceName = title;
      const userName = user?.displayName;
      const userPhoto = user?.photoURL;
      const userEmail = user?.email;
      const date = new Date();
      const review = { comment, serviceId, serviceName, userEmail, userName, userPhoto, date };

      fetch("http://localhost:5000/reviews", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(review),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.acknowledged) {
               alert("successfully added review");
               event.target.reset();
               const newReviewArray = [review, ...reviews];
               setReviews(newReviewArray);
            }
         });
   };
   return (
      <div>
         <form onSubmit={handleSubmit} id="textarea">
            <div className="mb-2 block">
               <Label htmlFor="comment" />
            </div>
            <Textarea
               id="comment"
               name="comment"
               placeholder="Add Your Review..."
               required={true}
               rows={4}
               className={!user?.uid && "pointer-events-none"}
            />
            {user?.uid && (
               <Button type="submit" className="mt-2">
                  Submit
               </Button>
            )}
         </form>
      </div>
   );
};

export default WriteCommentForm;
