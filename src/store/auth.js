import { createContext, useContext,useEffect } from "react";
import { useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("Hello")
  // const [isadmin, setIsadmin] = useState(true)
  const isLoggedIn=!!token;
  const userAuthenticte=async()=>{
    try {
        const response=await fetch('http://localhost:5000/api/auth/user',{
          method:"GET",
          headers:{
            'Authorization':`Bearer ${token}`
          }
        })

        if(response.ok){
            const data=await response.json();
            // console.log("auth ",data.userData);
            setUser(data.userData);
          }else {
            console.error("Error fetching user data");
          }
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(() => {
    
    userAuthenticte();
  }, []);
  // localStorage.clear();
  //function to stored the token in local storage
  
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    // let tk=serverToken;
    console.log("stortoken in auth",serverToken);
    localStorage.clear();
    localStorage.setItem("token", serverToken);
    // console.log(localStorage.getItem("token"))
   };
  const Logoutuser=()=>{
    setToken("");
    return localStorage.removeItem("token");
  }
 
  return (
    <AuthContext.Provider value={{isLoggedIn,Logoutuser, storeTokenInLS,user,token}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};