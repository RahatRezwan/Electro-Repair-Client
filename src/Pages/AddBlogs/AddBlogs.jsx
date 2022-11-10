import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useSetTitle from "../../hooks/useSetTitle";

const AddBlogs = () => {
   const { user } = useContext(AuthContext);
   useSetTitle("Add Blogs");
   const handleAddBlog = (event) => {
      event.preventDefault();
      const form = event.target;

      const title = form.title.value;
      const price = form.price.value;
      const duration = form.duration.value;
      const imgUrl = form.imgUrl.value;
      const description = form.description.value;
      const author = user?.displayName;
      const authorImg = user?.photURL;
      const date = new Date();

      const service = { title, price, duration, imgUrl, description, author, authorImg, date };
      fetch("http://localhost:5000/blogs", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(service),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.acknowledged) {
               form.reset();
               console.log(data);
            }
         });
   };

   return (
      <div className="max-w-[1320px] mx-auto mt-10 pt-10 min-h-screen">
         <div className="border rounded-md shadow-md p-7 w-[80%] mx-auto ">
            <h1 className="text-3xl font-extrabold mb-5">Create A New Blog</h1>
            <form onSubmit={handleAddBlog} className="flex flex-col gap-4">
               <div>
                  <div className="mb-2 block">
                     <Label htmlFor="title" value="Enter Blog Title" />
                  </div>
                  <TextInput
                     id="title"
                     type="text"
                     name="title"
                     placeholder="Blog Title"
                     required={true}
                     shadow={true}
                  />
               </div>

               <div>
                  <div className="mb-2 block">
                     <Label htmlFor="imgUrl" value="Cover Image Url" />
                  </div>
                  <TextInput
                     id="imgUrl"
                     type="text"
                     name="imgUrl"
                     placeholder="imgUrl"
                     required={true}
                     shadow={true}
                  />
               </div>

               <div id="textarea">
                  <div className="mb-2 block">
                     <Label htmlFor="description" value="Blog Description" />
                  </div>
                  <Textarea
                     id="description"
                     name="description"
                     placeholder="Blog description..."
                     required={true}
                     rows={7}
                  />
               </div>

               <Button type="submit">Create Blog</Button>
            </form>
         </div>
      </div>
   );
};

export default AddBlogs;
