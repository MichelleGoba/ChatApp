import { createContext, useState } from "react";

export const AuthContext = createContext();

// provider component with data
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Michelle",
  });

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
