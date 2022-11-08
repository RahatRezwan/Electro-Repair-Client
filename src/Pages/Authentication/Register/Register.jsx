import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { GoKey, GoMail } from "react-icons/go";

const Register = () => {
   return (
      <div className="min-h-screen max-w-lg mx-auto mt-8">
         <form className="flex flex-col gap-4 border border-gray-300 rounded-md p-[10px]">
            <div>
               <h1 className="text-3xl text-center">Login</h1>
            </div>
            <div>
               <div className="mb-2 block">
                  <Label htmlFor="email2" value="Your email" />
               </div>
               <TextInput
                  id="email2"
                  type="email"
                  placeholder="example@email.com"
                  required={true}
                  shadow={true}
                  icon={GoMail}
               />
            </div>
            <div>
               <div className="mb-2 block">
                  <Label htmlFor="password2" value="Your password" />
               </div>
               <TextInput
                  id="password2"
                  type="password"
                  placeholder="your password"
                  required={true}
                  shadow={true}
                  icon={GoKey}
               />
            </div>
            <div>
               <div className="mb-2 block">
                  <Label htmlFor="repeat-password" value="Repeat password" />
               </div>
               <TextInput id="repeat-password" type="password" required={true} shadow={true} />
            </div>
            <div className="flex items-center gap-2">
               <Checkbox id="agree" />
               <Label htmlFor="agree">
                  I agree with the{" "}
                  <a href="/forms" className="text-blue-600 hover:underline dark:text-blue-500">
                     terms and conditions
                  </a>
               </Label>
            </div>
            <Button type="submit">Login</Button>
         </form>
      </div>
   );
};

export default Register;
