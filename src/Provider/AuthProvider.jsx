import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const Gitprovider = new GithubAuthProvider();
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singInUserByGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const singInUserByGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, Gitprovider);
  };
  const creatNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (displayName, photoURL) => {
    setLoading(true);

    const profileData = {};
    if (displayName) {
      profileData.displayName = displayName;
    }
    if (photoURL) {
      profileData.photoURL = photoURL;
    }
    return updateProfile(auth.currentUser, profileData)
      .then(() => {
        console.log("User profile updated successfully");
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);

      if (currentUser) {
        const userEmail = currentUser.email;
        const loggedUser = { email: userEmail };

        axios
          .post('https://book-zone-server.vercel.app/jwt', loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log('token response', res.data);
          })
          .catch((err) => {
            console.error('Error fetching JWT:', err);
          });
      } else {
        axios
          .post('https://book-zone-server.vercel.app/logout', null, {
            withCredentials: true,
          })
          .then((res) => {
            console.log('logout user', res.data);
          })
          .catch((err) => {
            console.error('Error logging out:', err);
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     const userEmail = currentUser?.email || user?.email;
  //     const loggedUser = { email: userEmail };
  //     setUser(currentUser);
  //     console.log("current user", currentUser);
  //     setLoading(false);
  //     //if the user exists then issue a token
  //     if (currentUser) {
  //       axios
  //         .post("https://book-zone-server.vercel.app/jwt", loggedUser, {
  //           withCredentials: true,
  //         })
  //         .then((res) => {
  //           console.log("token response", res.data);
  //         });
  //     } else {
  //       axios
  //         .post("https://book-zone-server.vercel.app/logout", loggedUser, {
  //           withCredentials: true,
  //         })
  //         .then((res) => {
  //           console.log("logout user", res.data);
  //         });
  //     }
  //   });
  //   return () => {
  //     return unsubscribe();
  //   }
  // },[]);

  const authInfo = {
    user,
    creatNewUser,
    updateUserProfile,
    signOutUser,
    signInUser,
    singInUserByGoogle,
    singInUserByGithub,
    loading,
    setLoading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
