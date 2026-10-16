import React, { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const [screen, setScreen] = useState("login");

  if (screen === "login") {
    return (
      <LoginScreen
        goToRegister={() => setScreen("register")}
        onLoginSuccess={() => setScreen("home")}
      />
    );
  }

  if (screen === "register") {
    return (
      <RegisterScreen
        goToLogin={() => setScreen("login")}
        onRegisterSuccess={() => setScreen("login")}
      />
    );
  }

  return <HomeScreen />;
}