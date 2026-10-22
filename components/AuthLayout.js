import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <KeyboardAvoidingView style={styles.background} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.brand}>KUSINERA</Text>
          <Text style={styles.tagline}>Restaurant</Text>
          <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            {children}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#E0E6F8",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  container: {
    width: "100%",
    maxWidth: 440,
    alignSelf: "center",
  },
  brand: {
    color: "#6D0808",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 36,
  },
  tagline: {
    color: "#6D0808",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 28,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#292323",
    textAlign: "center",
  },
  subtitle: {
    color: "#625B5B",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 24,
    lineHeight: 21,
  },
});
