import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const SocialLogin = () => {
   const { googleLogin } = useContext(AuthContext);

   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || "/";

   /* google login */
   const handleGoogleLogin = () => {
      googleLogin()
         .then((result) => {
            const user = result.user;
            const currentUser = { email: user.email };

            /* get jwt token */
            fetch("https://electro-repair-server.vercel.app/jwt", {
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
                  navigate(from, { replace: true });
               });
         })
         .catch((e) => console.log(e));
   };
   return (
      <div className="grid grid-cols-2 gap-3">
         <Button onClick={handleGoogleLogin} type="">
            <FaGoogle className="h-5 w-5 mr-2" /> Google
         </Button>
         <Button type="submit">
            <FaGithub className="h-5 w-5 mr-2" /> Github
         </Button>
      </div>
   );
};

export default SocialLogin;
