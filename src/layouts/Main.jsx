import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import FooterSection from "../Pages/FooterSection/FooterSection";

const Main = () => {
   return (
      <div>
         <Header />
         <Outlet />
         <FooterSection />
      </div>
   );
};

export default Main;
