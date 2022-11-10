import { Avatar, Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
// import logoDark from "../../logoDark.png";
import logoLight from "../../logoLight.png";

const menus = [
   { name: "Home", url: "/" },
   { name: "Services", url: "/services" },
   { name: "Blogs", url: "/blogs" },
];

const Header = () => {
   const { user, logoutAUser } = useContext(AuthContext);

   /* handle logout */
   const handleLogout = () => {
      logoutAUser();
   };

   return (
      <div className="sticky top-0 z-[100] shadow-md bg-white">
         <Navbar fluid={true} rounded={true} className="bg-white max-w-[1320px] mx-auto">
            <Link to="/">
               <img src={logoLight} className="mr-3 h-6 sm:h-9 lg:h-16" alt="Logo" />
            </Link>
            <div className="flex md:order-2 gap-2">
               {user?.uid ? (
                  <div className="flex items-center gap-3">
                     <Link>
                        <Avatar
                           img={
                              user?.photoURL
                                 ? user.photoURL
                                 : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                           }
                           rounded={true}
                        />
                     </Link>
                     <Button onClick={handleLogout}>Logout</Button>
                  </div>
               ) : (
                  <>
                     <Link to="/login">
                        <Button>Login</Button>
                     </Link>
                  </>
               )}

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
                           isActive
                              ? "text-blue-700 text-[17px]"
                              : "text-[16px] hover:text-blue-700"
                        }
                     >
                        Add Service
                     </NavLink>
                     <NavLink to="/my-reviews">My Reviews</NavLink>
                  </>
               )}
            </Navbar.Collapse>
         </Navbar>
      </div>
   );
};

export default Header;
