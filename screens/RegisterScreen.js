import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthInput from "../components/authInput";
import AuthButton from "../components/authButton";

export default function RegisterScreen({ goToLogin, onRegisterSuccess }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister() {
    if (!email || !username || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    onRegisterSuccess();
  }

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.title}>Register</Text>

        <AuthInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <AuthInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <AuthInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <AuthInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <AuthButton title="Register" onPress={handleRegister} />

        <Text style={styles.registerText} onPress={goToLogin}>
          Already have an account? <Text style={styles.registerLink}>Login here</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#E0E6F8",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  registerText: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 14,
    color: "#555",
  },
  registerLink: {
    color: "#6D0808",
    fontWeight: "bold",
  },
});