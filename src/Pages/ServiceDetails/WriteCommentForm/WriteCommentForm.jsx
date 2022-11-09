import { Button, Label, Textarea } from "flowbite-react";
import React from "react";

const WriteCommentForm = ({ user, id }) => {
   const handleSubmit = (event) => {
      event.preventDefault();
      const comment = event.target.comment.value;
      const serviceId = id;
      const userName = user?.displayName;
      const userPhoto = user?.photoURL;
      const userEmail = user?.email;
      const date = new Date();
      const review = { comment, serviceId, userEmail, userName, userPhoto, date };

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
