import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { GoMail, GoKey } from "react-icons/go";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../assests/loginpage.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useSetTitle from "../../../hooks/useSetTitle";

const Login = () => {
   const { loginAUser, googleLogin } = useContext(AuthContext);
   const [error, setError] = useState(null);
   useSetTitle("Login");

   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || "/";

   /* handle login */
   const handleLogin = (event) => {
      setError(null);
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      loginAUser(email, password)
         .then((result) => {
            const user = result.user;
            const currentUser = { email: user?.email };
            form.reset();
            navigate(from, { replace: true });
         })
         .catch((error) => {
            if (error.code.slice(5) === "user-not-found") {
               setError("User Not Found");
               return;
            }
            if (error.code.slice(5) === "wrong-password") {
               setError("Your password is incorrect");
               return;
            }
         });
   };

   /* google login */
   const handleGoogleLogin = () => {
      googleLogin()
         .then((result) => {
            const user = result.user;
            const currentUser = { email: user?.email };
            navigate(from, { replace: true });
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
               onSubmit={handleLogin}
               className="flex flex-col gap-4 border border-gray-300 rounded-md p-[50px] w-[80%]"
            >
               <div>
                  <h1 className="text-3xl text-center">Login</h1>
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
                     email="password"
                     placeholder="your password"
                     required={true}
                     shadow={true}
                     icon={GoKey}
                  />
                  <div className="text-end text-blue-400">
                     <Link>
                        <p>Forgot Password?</p>
                     </Link>
                  </div>
               </div>

               {error ? (
                  <p className="text-[15px] text-red-500 text-center animate-bounce	">
                     <strong>{error}</strong>
                  </p>
               ) : null}
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
                  <Button onClick={handleGoogleLogin} type="">
                     <FaGoogle className="h-5 w-5 mr-2" /> Google
                  </Button>
                  <Button type="submit">
                     <FaGithub className="h-5 w-5 mr-2" /> Github
                  </Button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
