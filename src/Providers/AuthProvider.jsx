/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    // google provider
    const provider = new GoogleAuthProvider();
    // creating user
    const createUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    // login user
    const login = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    // logout user
    const logout = () =>{
      return  signOut(auth)
    }
    // google login
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)

    }
    // setting a watchman
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
        })
        return () => 
       {
        return unSubscribe()
       }
    },[])
    const values = {
        user,
        loading,
        createUser,
        login,
        logout,
        googleLogin
    }
    return (
     
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
   
);
};

export default AuthProvider;