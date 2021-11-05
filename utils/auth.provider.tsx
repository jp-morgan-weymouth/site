import { createContext, Dispatch, useContext, useState } from "react";

let AuthContext = createContext({
  isAuthenticated: false,
  setAuthenticated: (val: any): Dispatch<any> => val,
});

interface authProvider {
  children: any;
  authenticated: {
    isAuthenticated: boolean;
    setAuthenticated: void;
  };
}

export const authProvider = ({ children, authenticated }: authProvider) => {
  const [isAuthenticated, setAuthenticated] = useState<any>(authenticated);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const useIsAuthenticated = () => {
  const context = useAuth();
  return context.isAuthenticated;
};
