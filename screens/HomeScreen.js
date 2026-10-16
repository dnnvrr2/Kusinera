import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.background}>
    
      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={styles.kusinera}>KUSINERA</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#E0E6F8",
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 18,
    color: "#333",
    fontWeight: 'bold',
  },

  kusinera: {
    fontSize: 30,
    color: "#6D0808",
    fontWeight: '1000',
    
  },
});