import {
  ContextType,
  createContext,
  Dispatch,
  FC,
  useContext,
  useState,
} from "react";

let AuthContext: any = createContext({
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

const AuthProvider: FC<any> = ({ children, authenticated }: authProvider) => {
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
  const context: any = useAuth();
  return context.isAuthenticated;
};

export default AuthProvider;
