import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserData {
  email?: string;
  id?: string;
  name?: string;
  __typename?: string;
}

interface AuthContextData {
  user?: UserData;
  setUser?: (data: UserData) => void;
}

const AuthContext = createContext<AuthContextData>({
  user: undefined,
  setUser: undefined,
});

export const useAuth = (): AuthContextData => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserData | undefined>({});

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
