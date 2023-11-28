/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const publicAxios = UseAxiosPublic()
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
            if(currentUser){
                const UserInfo = {
                    email : currentUser?.email
                   
                }
                publicAxios.post('/jwt' , UserInfo)
                .then(res => {
                    
                    if(res.data?.token){
                        localStorage.setItem('AccessToken' , res.data?.token)
                        setLoading(false)
                    }
                })
                .catch(error => console.log(error))

            }
            else{
                localStorage.removeItem('AccessToken')
                setLoading(false)
            }
            
            
        })
        return () => 
       {
        return unSubscribe()
       }
    },[publicAxios])
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