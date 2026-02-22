import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
  name: string;
  email: string;
  phone?: string;
  profession?: string;
  location?: string;
}

interface UserContextType {
  user: UserData | null;
  login: (data: UserData) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(() => {
    const saved = localStorage.getItem('workindia_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (data: UserData) => {
    setUser(data);
    localStorage.setItem('workindia_user', JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('workindia_user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
