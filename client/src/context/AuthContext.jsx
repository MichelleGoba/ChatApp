import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

// provider component with data
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

//   form information
const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
});

console.log("registerInfo", registerInfo)

const updateRegisterInfo = useCallback((info) =>{
    setRegisterInfo(info);
}, [])
  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
