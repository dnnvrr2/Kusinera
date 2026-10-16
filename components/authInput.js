import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AuthInput({ value, onChangeText, placeholder, secureTextEntry, keyboardType }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = secureTextEntry === true;

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPasswordField && !showPassword}
        keyboardType={keyboardType}
        autoCapitalize="none"
      />

      {isPasswordField && (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={22}
            color="#666"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    justifyContent: "center",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 20,
    padding: 12,
    paddingRight: 45,
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    right: 15,
  },
});