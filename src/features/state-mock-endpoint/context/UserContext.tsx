"use client";
import React, { createContext, useContext, useState } from "react";

interface IUserContextType {
  existingUser: string;
  updateUser: (userID: string) => void;
}

const UserContext = createContext<IUserContextType | null>(null);

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [existingUser, setExistingUser] = useState("");

  const updateUser = (userID: string) => {
    setExistingUser(userID);
  };

  const contextValue: IUserContextType = {
    existingUser,
    updateUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
