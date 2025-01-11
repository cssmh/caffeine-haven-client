import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createNewUser = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (currentUsersInfo, username, photo) => {
    updateProfile(currentUsersInfo, {
      displayName: username,
      photoURL: photo,
    });
  };

  const signInUser = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createNewUserByGoogle = () => {
    setAuthLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setAuthLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setAuthLoading(false);
      if (user) {
        const userInfo = { email: user?.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          const token = res.data?.token;
          if (token) {
            localStorage.setItem("access-token", token);
            setAuthLoading(false);
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setAuthLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);

  // send the info to context
  const authInfo = {
    createNewUser,
    updateUserProfile,
    signOutUser,
    createNewUserByGoogle,
    signInUser,
    currentUser,
    authLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
