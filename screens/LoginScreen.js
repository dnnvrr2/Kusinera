import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthInput from "../components/authInput";
import AuthButton from "../components/authButton";

export default function LoginScreen({ goToRegister, onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (username === "admin" && password === "1234") {
      setError("");
      onLoginSuccess();
    } else {
      setError("Wrong username or password");
    }
  }

  return (
    <View style={styles.background}>

      <Text style = {styles.sTitle}>KUSINERA</Text>
      <Text style = {styles.sTitle1}>Restaurant</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

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

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <AuthButton title="Login" onPress={handleLogin} />

        <Text style={styles.registerText} onPress={goToRegister}>
          Don't have an account? <Text style={styles.registerLink}>Register here</Text>
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

  sTitle: {
    color: '#6D0808',
    alignSelf: 'center',
    fontWeight: '1000',
    fontSize: 40,
    marginBottom: -10
  },

    sTitle1: {
    color: '#6D0808',
    alignSelf: 'center',
    fontWeight: 'regular',
    fontSize: 20,
    marginBottom: 30
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