import React, { useContext, useEffect, useState } from 'react';
import authenticate from "./Firebase";
import firebase from "./Firebase"
import storage from "./Firebase";


const AuthContext =React.createContext();

export const useAuth=()=>{
    return useContext(AuthContext);
}

function AuthProvider({children}) {
    const [current,setCurrent]=useState(true);
    const [activeUser,setActiveUser]=useState(null);
     

    useEffect(()=>{
        const subscribe = firebase.auth().onAuthStateChanged(user =>{
            setActiveUser(user);
            setCurrent(false);
        })

        return subscribe;
    },[])
        const Signin =()=>{
          var provider = new firebase.auth.GoogleAuthProvider();

                return firebase.auth()
            .signInWithPopup(provider).then(result =>{
                const res=result
            }).catch(err => console.log(err))
    }
    
   const value={
       Signin,
       storage,
       activeUser
    }
    return (
        <AuthContext.Provider value={value}>
            {!current && children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;