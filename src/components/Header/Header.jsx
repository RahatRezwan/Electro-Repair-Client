import { Avatar, Button, Navbar } from "flowbite-react";
import "flowbite";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import logoDark from "../../logoDark.png";
import logoLight from "../../logoLight.png";
import { Blogs } from "../../Pages";

const menus = [
   { name: "Home", url: "/" },
   { name: "Services", url: "/services" },
   { name: "Blogs", url: "/blogs" },
];

const Header = () => {
   const { user } = useContext(AuthContext);
   return (
      <Navbar fluid={true} rounded={true} className="sticky top-0 z-[1]">
         <Navbar.Brand to="https://flowbite.com/">
            <img src={logoLight} className="mr-3 h-6 sm:h-9 lg:h-16" alt="Flowbite Logo" />
         </Navbar.Brand>
         <div className="flex md:order-2">
            <Link to="/login">
               <Button>Login</Button>
            </Link>
            <Navbar.Toggle />
         </div>
         <Navbar.Collapse>
            {menus.map((menu, index) => (
               <NavLink
                  to={menu.url}
                  key={index}
                  className={({ isActive }) =>
                     isActive ? "text-blue-700 text-[17px]" : "text-[16px] hover:text-blue-700"
                  }
                  end
               >
                  {menu.name}
               </NavLink>
            ))}
            {user?.uid && (
               <>
                  <NavLink
                     to="/addService"
                     className={({ isActive }) =>
                        isActive ? "text-blue-700 text-[17px]" : "text-[16px] hover:text-blue-700"
                     }
                  >
                     Add Service
                  </NavLink>
                  <NavLink to="/my-reviews">My Reviews</NavLink>
               </>
            )}
         </Navbar.Collapse>
      </Navbar>
   );
};

export default Header;
