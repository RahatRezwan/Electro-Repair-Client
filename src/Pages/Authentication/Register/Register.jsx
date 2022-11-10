import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { FaUser, FaImage } from "react-icons/fa";
import { GoKey, GoMail } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../../assests/loginpage.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { SpinnerContext } from "../../../contexts/HomeSpinner/HomeSpinner";
import useSetTitle from "../../../hooks/useSetTitle";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";

const Register = () => {
   const { createANewUser, updateUserProfile } = useContext(AuthContext);
   const { setSpin } = useContext(SpinnerContext);
   const [error, setError] = useState(null);
   useSetTitle("Register");

   const navigate = useNavigate();
   /* handle Registration */
   const handleRegister = (event) => {
      setError(null);
      event.preventDefault();
      const form = event.target;
      const fullName = form.name.value;
      const photoUrl = form.photoUrl.value;
      const email = form.email.value;
      const password = form.password.value;
      if (password.length < 8) {
         setError("Your password should have at least 8 characters");
         return;
      }
      console.log(fullName, photoUrl, email, password);

      /* create user using firebase email & pass*/
      createANewUser(email, password)
         .then((result) => {
            const user = result.user;
            const currentUser = { email: user.email };
            /* get jwt token */
            fetch("http://localhost:5000/jwt", {
               method: "POST",
               headers: {
                  "content-type": "application/json",
               },
               body: JSON.stringify(currentUser),
            })
               .then((res) => res.json())
               .then((data) => {
                  console.log(data);
                  localStorage.setItem("electro_repair_token", data.token);
                  handleUpdateProfile(fullName, photoUrl);
                  setSpin(true);
                  form.reset();
               });
         })
         .catch((e) => console.log(e));
   };

   /* Handle update profile */
   const handleUpdateProfile = (displayName, photoURL) => {
      const userInfo = { displayName, photoURL };
      updateUserProfile(userInfo)
         .then(() => {
            navigate("/");
            toast.success("Account Created Successfully");
            setSpin(false);
         })
         .catch((e) => console.log(e));
   };

   return (
      <div className="min-h-screen max-w-[1320px] mx-auto mt-8 flex gap-4 lg:gap-0 flex-col-reverse lg:flex-row justify-evenly items-center">
         <div className="w-full flex justify-center">
            <img src={loginImg} alt="" className="w-50" />
         </div>
         <div className="w-full flex justify-center">
            <form
               onSubmit={handleRegister}
               className="flex flex-col gap-4 border border-gray-300 rounded-md p-[50px] w-[80%]"
            >
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
                     name="name"
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
                     name="photoUrl"
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
                     name="email"
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
                     name="password"
                     placeholder="your password"
                     required={true}
                     shadow={true}
                     icon={GoKey}
                  />
               </div>
               {error ? (
                  <p className="text-[15px] text-red-500 text-center animate-bounce	">
                     <strong>{error}</strong>
                  </p>
               ) : null}
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
               <SocialLogin />
            </form>
         </div>
      </div>
   );
};

export default Register;
