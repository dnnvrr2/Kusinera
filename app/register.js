import React from "react";
import { useRouter } from "expo-router";
import RegisterScreen from "../screens/RegisterScreen";
import { useAuth } from "../context/AuthContext";

export default function RegisterRoute() {
  const router = useRouter();
  const { accounts, register } = useAuth();

  function handleRegister(account) {
    register(account);
    router.replace("/login");
  }

  return (
    <RegisterScreen
      accounts={accounts}
      goToLogin={() => router.replace("/login")}
      onRegisterSuccess={handleRegister}
    />
  );
}
