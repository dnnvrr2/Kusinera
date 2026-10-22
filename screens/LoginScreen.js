import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import AuthInput from "../components/authInput";
import AuthButton from "../components/authButton";
import AuthLayout from "../components/AuthLayout";

export default function LoginScreen({ accounts, message, goToRegister, onLoginSuccess, goToHome }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (!username.trim() || !password) {
      setError("Please enter your username and password.");
      return;
    }

    const account = accounts.find(
      (user) => user.username.toLowerCase() === username.trim().toLowerCase()
        && user.password === password
    );
    if (!account) {
      setError("Incorrect username or password.");
      return;
    }

    setError("");
    onLoginSuccess(account);
  }

  return (
    <AuthLayout title="Welcome back" subtitle="Log in to your Kusinera account.">
      {message ? <Text accessibilityLiveRegion="polite" style={styles.success}>{message}</Text> : null}
      <AuthInput label="Username" placeholder="Enter your username" value={username} onChangeText={setUsername} />
      <AuthInput label="Password" placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry />
      {error ? <Text accessibilityRole="alert" style={styles.error}>{error}</Text> : null}
      <AuthButton title="Log in" onPress={handleLogin} />
      <Text accessibilityRole="link" style={styles.link} onPress={goToRegister}>Don't have an account? Register here</Text>
      <Text accessibilityRole="link" style={styles.link} onPress={goToHome}>Back to menu</Text>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "#B42318",
    marginBottom: 10,
    lineHeight: 20,
  },
  success: {
    color: "#27613B",
    marginBottom: 16,
    lineHeight: 20,
  },
  link: {
    textAlign: "center",
    marginTop: 20,
    color: "#6D0808",
    lineHeight: 22,
  },
});
