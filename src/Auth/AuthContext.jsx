import { createContext, useState, useEffect } from "react";
import * as auth from "./auth";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCurrentUser = async () => {
    try {
      const user = await auth.getCurrentUser();
      console.log("current user", user);
      setUser(user);
    } catch (err) {
      // not logged in
      console.log(err);
      setUser(null);
    }
  };

  useEffect(() => {
    getCurrentUser()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  const signIn = async (username, password) => {
    debugger;
    await auth.signIn(username, password);
    await fetchUser();
  };
  const signOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  const authValue = {
    user,
    isLoading,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
