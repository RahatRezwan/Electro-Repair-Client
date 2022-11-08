import { Button, Checkbox, FileInput, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";

const AddService = () => {
   return (
      <div className="max-w-[1320px] mx-auto mt-10 pt-10 min-h-screen">
         <div className="border rounded-md shadow-md p-5 w-[80%] mx-auto ">
            <h1 className="text-3xl font-extrabold mb-5">Create A New Service</h1>
            <form className="flex flex-col gap-4">
               <div>
                  <div className="mb-2 block">
                     <Label htmlFor="title" value="Enter Service Title" />
                  </div>
                  <TextInput
                     id="title"
                     type="text"
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
                     placeholder="Price"
                     required={true}
                     shadow={true}
                  />
               </div>
               <div>
                  <div className="mb-2 block">
                     <Label htmlFor="Duration" value="Duration" />
                  </div>
                  <TextInput
                     id="Duration"
                     type="text"
                     placeholder="Duration"
                     required={true}
                     shadow={true}
                  />
               </div>
               <div id="fileUpload">
                  <div className="mb-2 block">
                     <Label htmlFor="file" value="Upload Cover Image" />
                  </div>
                  <FileInput id="file" />
               </div>

               <div id="textarea">
                  <div className="mb-2 block">
                     <Label htmlFor="description" value="Service Description" />
                  </div>
                  <Textarea
                     id="description"
                     placeholder="Service description..."
                     required={true}
                     rows={4}
                  />
               </div>

               <Button type="submit">Create Service</Button>
            </form>
         </div>
      </div>
   );
};

export default AddService;
