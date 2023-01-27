import { createContext, useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = ({username}) => {
    setUser({username});
    navigate('/profile');
  }

  const logout = () => {
    setUser(null);
    navigate('/');
  }

  const auth = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
}

const AuthRoute = ({ children}) => {
  const auth = useAuth();
  if (!auth.user) return <Navigate to={"/login"} />;

  return children
}

export { 
  AuthProvider,
  AuthRoute,
  useAuth,
};
