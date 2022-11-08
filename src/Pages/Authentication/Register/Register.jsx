import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { FaFacebook, FaGoogle, FaUser, FaImage } from "react-icons/fa";
import { GoKey, GoMail } from "react-icons/go";
import { Link } from "react-router-dom";
import loginImg from "../../../assests/loginpage.png";

const Register = () => {
   return (
      <div className="min-h-screen w-full mx-auto mt-8 flex flex-cols lg:flex-row justify-evenly items-center">
         <div className="w-full flex justify-center">
            <img src={loginImg} alt="" className="w-50" />
         </div>
         <div className="w-full flex justify-center">
            <form className="flex flex-col gap-4 border border-gray-300 rounded-md p-[50px] w-[80%]">
               <div>
                  <h1 className="text-3xl text-center">Register</h1>
               </div>
               <div>
                  <div className="mb-2 block">
                     <Label htmlFor="name" value="Your Full Name" />
                  </div>
                  <TextInput
                     id="name"
                     type="text"
                     placeholder="Your Full Name"
                     required={true}
                     shadow={true}
                     icon={FaUser}
                  />
               </div>
               <div>
                  <div className="mb-2 block">
                     <Label htmlFor="photoUrl" value="Your Photo Url" />
                  </div>
                  <TextInput
                     id="photoUrl"
                     type="text"
                     placeholder="Your Photo Url"
                     required={true}
                     shadow={true}
                     icon={FaImage}
                  />
               </div>
               <div>
                  <div className="mb-2 block">
                     <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                     id="email"
                     type="email"
                     placeholder="example@email.com"
                     required={true}
                     shadow={true}
                     icon={GoMail}
                  />
               </div>
               <div>
                  <div className="mb-2 block">
                     <Label htmlFor="password" value="Your password" />
                  </div>
                  <TextInput
                     id="password"
                     type="password"
                     placeholder="your password"
                     required={true}
                     shadow={true}
                     icon={GoKey}
                  />
               </div>

               <Button type="submit">Register</Button>
               <div>
                  <p className="text-center">
                     Already have an account?{" "}
                     <Link to="/login">
                        <span className="text-blue-700">Login</span>
                     </Link>
                  </p>
               </div>
               <div className="flex justify-between items-center">
                  <hr className="bg-gray-600 border-none h-[1px] rounded-lg w-[40%]" />
                  <p>OR</p>
                  <hr className="bg-gray-600 border-none h-[1px] rounded-lg w-[40%]" />
               </div>

               <p className="text-center">Login With</p>
               <div className="grid grid-cols-2 gap-3">
                  <Button type="submit">
                     <FaGoogle className="h-5 w-5 mr-2" /> Google
                  </Button>
                  <Button type="submit">
                     <FaFacebook className="h-5 w-5 mr-2" /> Facebook
                  </Button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Register;
