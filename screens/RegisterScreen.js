import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import AuthInput from "../components/authInput";
import AuthButton from "../components/authButton";
import AuthLayout from "../components/AuthLayout";

export default function RegisterScreen({ accounts, goToLogin, onRegisterSuccess }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister() {
    const cleanEmail = email.trim().toLowerCase();
    const cleanUsername = username.trim();

    if (!cleanEmail || !cleanUsername || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      setError("Your password must have at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const accountExists = accounts.some(
      (user) => user.email === cleanEmail
        || user.username.toLowerCase() === cleanUsername.toLowerCase()
    );
    if (accountExists) {
      setError("That email or username is already registered.");
      return;
    }

    setError("");
    onRegisterSuccess({ email: cleanEmail, username: cleanUsername, password });
  }

  return (
    <AuthLayout title="Create an account" subtitle="Welcome to the Kusinera table.">
      <AuthInput label="Email" placeholder="you@example.com" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <AuthInput label="Username" placeholder="Choose a username" value={username} onChangeText={setUsername} />
      <AuthInput label="Password" placeholder="At least 8 characters" value={password} onChangeText={setPassword} secureTextEntry />
      <AuthInput label="Confirm password" placeholder="Enter your password again" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
      {error ? <Text accessibilityRole="alert" style={styles.error}>{error}</Text> : null}
      <AuthButton title="Create account" onPress={handleRegister} />
      <Text accessibilityRole="link" style={styles.link} onPress={goToLogin}>Already have an account? Log in here</Text>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  error: { color: "#B42318", marginBottom: 10, lineHeight: 20 },
  link: { textAlign: "center", marginTop: 20, color: "#6D0808", lineHeight: 22 },
});
