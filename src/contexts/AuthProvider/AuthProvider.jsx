import React, { createContext, useState } from "react";
import app from "../../firebase/firebase.config";
import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   signInWithEmailAndPassword,
   signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

/* Google Auth provider */
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loader, setLoader] = useState(true);

   /* Create A user using email and pass */
   const createANewUser = (email, password) => {
      setLoader(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   /* Login a user */
   const loginAUser = (email, password) => {
      setLoader(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   /* Google Login */
   const googleLogin = () => {
      setLoader(true);
      return signInWithPopup(auth, googleProvider);
   };

   const authInfo = { user, loader, createANewUser, loginAUser, googleLogin };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
