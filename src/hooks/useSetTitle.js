import { useEffect } from "react";

const useSetTitle = (title) => {
   useEffect(() => {
      document.title = `${title} | Electro Repair`;
   }, [title]);
};

export default useSetTitle;
