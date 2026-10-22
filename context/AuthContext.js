import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // This is a class prototype. Accounts reset when the app reloads.
  const [accounts, setAccounts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [message, setMessage] = useState("");

  function register(account) {
    setAccounts([...accounts, account]);
    setMessage("Account created. You can now log in.");
  }

  function login(account) {
    setCurrentUser(account);
    setMessage("");
  }

  function logout() {
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider value={{ accounts, currentUser, message, setMessage, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
