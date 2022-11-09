import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
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

   /* Logout a user */
   const logoutAUser = () => {
      setLoader(true);
      return signOut(auth);
   };

   /* Update a user profiel */
   const updateUserProfile = (userInfo) => {
      setLoader(true);
      return updateProfile(auth.currentUser, userInfo);
   };

   /* get currently signed in user */
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoader(false);
         console.log("current user: ", currentUser);
      });
      return () => unsubscribe();
   }, []);

   const authInfo = {
      user,
      loader,
      createANewUser,
      loginAUser,
      googleLogin,
      logoutAUser,
      updateUserProfile,
   };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
