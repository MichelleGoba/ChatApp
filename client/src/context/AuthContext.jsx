import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";

export const AuthContext = createContext();

// provider component with data
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null); // handling error when registering the user
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    //   form information
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loginError, setLoginError] = useState(null); // handling error when registering the user
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ 
    email: "",
    password: ""
  
  });

  
  console.log("User", user);
  console.log("loginInfo", loginInfo);


  useEffect(() => {
    const user  = localStorage.getItem("User")

    setUser(JSON.parse(user));
  }, []);

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);

  //   function to register a user
  const registerUser = useCallback(async(e) => {
    e.preventDefault();
    setIsRegisterLoading(true)
    setRegisterError(null)

    const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo));

    setIsRegisterLoading(false)

    if(response.error){
      return setRegisterError(response);
    }

     // save user to local storage
     localStorage.setItem("User", JSON.stringify(response))
     setUser(response)
  }, [registerInfo]);

  // login user
  const loginUser = useCallback(async(e) => {
    e.preventDefault()
    setIsLoginLoading(true)
    setLoginError(null)

    const response = await postRequest(
      `${baseUrl}/users/login`,
      JSON.stringify(loginInfo)
    );

    setIsLoginLoading(false)
    // handle error
    if(response.error){
      return setLoginError(response);
    }

    localStorage.setItem("User", JSON.stringify(response))
    setUser(response);
  }, [loginInfo]);
  

  // logout user
  const logoutUser = useCallback(() => {
    localStorage.removeItem("User");
    setUser(null);
  }, [])

  return (
    <AuthContext.Provider
           value={{
             user,
             registerInfo,
             updateRegisterInfo,
             registerUser,
             registerError,
             isRegisterLoading,
             logoutUser,
             loginUser,
             loginError,
             loginInfo,
             updateLoginInfo,
             isLoginLoading
           }}
         >
           {children}
         </AuthContext.Provider>
       );
     };

