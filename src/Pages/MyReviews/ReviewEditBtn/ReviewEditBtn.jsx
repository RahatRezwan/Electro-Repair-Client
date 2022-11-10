import { Button, Modal, Textarea } from "flowbite-react";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const ReviewEditBtn = ({ _id, comment, reviews, setReviews }) => {
   const [visible, setVisible] = useState(false);
   const [newComment, setNewComment] = useState(comment);

   const handleEditComment = () => {
      const editedComment = newComment;
      setVisible(false);
      fetch(`https://electro-repair-server.vercel.app/reviews/${_id}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify({ editedComment }),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount > 0) {
               const restComments = reviews.filter((cmt) => cmt._id !== _id);
               const editedComment = reviews.find((cmt) => cmt._id === _id);
               editedComment.comment = newComment;
               const newCommentsArray = [...restComments, editedComment];
               toast.success("Review Updated Successfully");
               setReviews(newCommentsArray);
            }
         });
   };

   return (
      <React.Fragment>
         <button onClick={() => setVisible(true)}>
            <FaEdit className="w-6 h-6 text-blue-600" />
         </button>
         <Modal show={visible} size="lg" popup={true} onClose={() => setVisible(false)}>
            <Modal.Header />
            <Modal.Body>
               <div id="textarea">
                  <div className="mb-2 block">
                     <h3 className="text-2xl font-bold">Edit Your Review</h3>
                  </div>
                  <Textarea
                     onChange={(event) => setNewComment(event.target.value)}
                     defaultValue={newComment}
                     required={true}
                     rows={4}
                  />
                  <Button onClick={handleEditComment} type="submit" className="mt-3">
                     Save
                  </Button>
               </div>
            </Modal.Body>
         </Modal>
      </React.Fragment>
   );
};

export default ReviewEditBtn;
