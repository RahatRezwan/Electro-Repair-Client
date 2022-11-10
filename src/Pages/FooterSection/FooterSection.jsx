import { Footer } from "flowbite-react";
import React from "react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../logoLight.png";
const FooterSection = () => {
   return (
      <Footer container={true} className="border-t-2 mt-14">
         <div className="max-w-[1320px] w-full mx-auto">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
               <div>
                  <Link to="/">
                     <img
                        src={logo}
                        alt="Electrorepair Logo"
                        name="electrorepair"
                        className="w-50 h-50"
                     />
                  </Link>
               </div>
               <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-6">
                  <div>
                     <Footer.Title title="Link" />
                     <Footer.LinkGroup col={true}>
                        <Link to="/services">Services</Link>
                        <Link to="/blogs">Blogs</Link>
                     </Footer.LinkGroup>
                  </div>
                  <div>
                     <Footer.Title title="Follow us" />
                     <Footer.LinkGroup col={true}>
                        <Footer.Link href="https://github.com/">Github</Footer.Link>
                        <Footer.Link href="https://www.facebook.com/">Facebook</Footer.Link>
                     </Footer.LinkGroup>
                  </div>
                  <div>
                     <Footer.Title title="Your Activity" />
                     <Footer.LinkGroup col={true}>
                        <Link to="/my-reviews">My Reviews</Link>
                     </Footer.LinkGroup>
                  </div>
                  <div>
                     <Footer.Title title="Admin Only" />
                     <Footer.LinkGroup col={true}>
                        <Link to="/addService">Add Service</Link>
                        <Link to="/addBlog">Add Blog</Link>
                     </Footer.LinkGroup>
                  </div>
               </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
               <Footer.Copyright href="#" by="Electro-Repair™" year={2022} />
               <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                  <Footer.Icon href="https://www.facebook.com/" icon={BsFacebook} />
                  <Footer.Icon href="#" icon={BsInstagram} />
                  <Footer.Icon href="#" icon={BsTwitter} />
                  <Footer.Icon href="#" icon={BsGithub} />
                  <Footer.Icon href="#" icon={BsDribbble} />
               </div>
            </div>
         </div>
      </Footer>
   );
};

export default FooterSection;
