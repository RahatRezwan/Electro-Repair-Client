import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
   createUserWithEmailAndPassword,
   getAuth,
   GithubAuthProvider,
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

/* Github Provider */
const githubProvider = new GithubAuthProvider();

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

   /* github login */
   const githubLogin = () => {
      setLoader(true);
      return signInWithPopup(auth, githubProvider);
   };

   /* Logout a user */
   const logoutAUser = () => {
      setLoader(true);
      localStorage.removeItem("electro_repair_token");
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
      githubLogin,
      logoutAUser,
      updateUserProfile,
   };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
