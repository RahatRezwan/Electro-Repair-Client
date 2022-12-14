import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useSetTitle from "../../hooks/useSetTitle";
import { toast } from "react-toastify";

const AddService = () => {
   const { user } = useContext(AuthContext);
   useSetTitle("Add Service");
   const handleAddService = (event) => {
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
      fetch("https://electro-repair-server.vercel.app/services", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(service),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.acknowledged) {
               toast.success("Service Added Successfully");
               form.reset();
            }
         });
   };

   return (
      <div className="max-w-[1320px] mx-auto mt-10 pt-10 min-h-screen">
         <div className="border rounded-md shadow-md p-7 w-[80%] mx-auto ">
            <h1 className="text-3xl font-extrabold mb-5">Create A New Service</h1>
            <form onSubmit={handleAddService} className="flex flex-col gap-4">
               <div>
                  <div className="mb-2 block">
                     <Label htmlFor="title" value="Enter Service Title" />
                  </div>
                  <TextInput
                     id="title"
                     type="text"
                     name="title"
                     placeholder="Service Title"
                     required={true}
                     shadow={true}
                  />
               </div>
               <div>
                  <div className="mb-2 block">
                     <Label htmlFor="price" value="Price" />
                  </div>
                  <TextInput
                     id="price"
                     type="text"
                     name="price"
                     placeholder="Price"
                     required={true}
                     shadow={true}
                  />
               </div>
               <div>
                  <div className="mb-2 block">
                     <Label htmlFor="duration" value="duration" />
                  </div>
                  <TextInput
                     id="duration"
                     type="text"
                     name="duration"
                     placeholder="Duration"
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
                     <Label htmlFor="description" value="Service Description" />
                  </div>
                  <Textarea
                     id="description"
                     name="description"
                     placeholder="Service description..."
                     required={true}
                     rows={7}
                  />
               </div>

               <Button type="submit">Create Service</Button>
            </form>
         </div>
      </div>
   );
};

export default AddService;
