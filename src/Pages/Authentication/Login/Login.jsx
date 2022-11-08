import { Button, Checkbox, Dropdown, Label, TextInput } from "flowbite-react";
import React from "react";
import { GoMail, GoKey } from "react-icons/go";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImg from "../../../assests/loginpage.png";

const Login = () => {
   return (
      <div className="min-h-screen w-full mx-auto mt-8 flex flex-cols lg:flex-row justify-evenly items-center">
         <div className="w-full flex justify-center">
            <img src={loginImg} alt="" className="w-50" />
         </div>
         <div className="w-full flex justify-center">
            <form className="flex flex-col gap-4 border border-gray-300 rounded-md p-[50px] w-[80%]">
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
               <div className="text-center hover:text-blue-700">
                  <Link>
                     <p>Forgot Password?</p>
                  </Link>
               </div>
               <Button type="submit">Login</Button>
               <div>
                  <p className="text-center">
                     New to this website?{" "}
                     <Link to="/register">
                        <span className="text-blue-700">Register</span>
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

export default Login;
