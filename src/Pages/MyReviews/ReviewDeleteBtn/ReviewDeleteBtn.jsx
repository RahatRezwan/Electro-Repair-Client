import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Modal } from "flowbite-react";

const ReviewDeleteBtn = ({ _id, reviews, setReviews }) => {
   const [visible, setVisible] = useState(false);

   const handleDeleteComment = () => {
      setVisible(false);

      fetch(`http://localhost:5000/reviews/${_id}`, {
         method: "DELETE",
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.deletedCount > 0) {
               const restComments = reviews.filter((cmt) => cmt._id !== _id);
               setReviews(restComments);
               alert("comment deleted successfully");
            }
         });
   };
   return (
      <React.Fragment>
         <button onClick={() => setVisible(true)}>
            <FaTrashAlt className="w-6 h-6 text-red-600" />
         </button>
         <Modal show={visible} size="lg" popup={true} onClose={() => setVisible(false)}>
            <Modal.Header />
            <Modal.Body>
               <div className="text-center">
                  <h1 className="text-2xl text-bold text-red-600">
                     Are you sure! you want to delete?
                  </h1>
                  <button
                     onClick={handleDeleteComment}
                     type="submit"
                     className="mt-3 text-center bg-red-600 text-white text-bold py-2 px-4 rounded"
                  >
                     Delete
                  </button>
               </div>
            </Modal.Body>
         </Modal>
      </React.Fragment>
   );
};

export default ReviewDeleteBtn;
