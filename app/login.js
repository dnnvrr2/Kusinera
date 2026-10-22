import React from "react";
import { useRouter } from "expo-router";
import LoginScreen from "../screens/LoginScreen";
import { useAuth } from "../context/AuthContext";

export default function LoginRoute() {
  const router = useRouter();
  const { accounts, message, setMessage, login } = useAuth();

  function handleLogin(account) {
    login(account);
    router.replace("/");
  }

  function openRegistration() {
    setMessage("");
    router.replace("/register");
  }

  return (
    <LoginScreen
      accounts={accounts}
      message={message}
      goToRegister={openRegistration}
      onLoginSuccess={handleLogin}
      goToHome={() => router.replace("/")}
    />
  );
}
