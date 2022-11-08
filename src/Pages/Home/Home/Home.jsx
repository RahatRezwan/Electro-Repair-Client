import React from "react";
import useSetTitle from "../../../hooks/useSetTitle";

const Home = () => {
   useSetTitle("Home");
   return (
      <div>
         <h1>Homepage</h1>
      </div>
   );
};

export default Home;
