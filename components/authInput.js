import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AuthInput({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = secureTextEntry === true;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.field}>
        <TextInput
          accessibilityLabel={label}
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPasswordField && !showPassword}
          keyboardType={keyboardType}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {isPasswordField && (
          <TouchableOpacity
            style={styles.icon}
            accessibilityRole="button"
            accessibilityLabel={showPassword ? "Hide password" : "Show password"}
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
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
  },
  label: { color: "#403838", fontSize: 14, fontWeight: "600", marginBottom: 7 },
  field: {
    position: "relative",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 20,
    padding: 12,
    paddingRight: 45,
    fontSize: 16,
    color: "#292323",
    minHeight: 48,
  },
  icon: {
    position: "absolute",
    right: 15,
  },
});
