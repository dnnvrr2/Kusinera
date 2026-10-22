import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MenuCard({ item, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`View ${item.name}`}
      onPress={() => onPress(item.id)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.icon}>
        <Ionicons name={item.icon} size={25} color="#6D0808" />
      </View>
      <View style={styles.info}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>PHP {item.price.toFixed(2)}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#6D0808" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", alignItems: "center", gap: 14, backgroundColor: "#FFFFFF", borderRadius: 18, padding: 18, marginBottom: 12 },
  pressed: { opacity: 0.7 },
  icon: { width: 52, height: 52, borderRadius: 16, backgroundColor: "#F8ECE8", alignItems: "center", justifyContent: "center" },
  info: { flex: 1 },
  category: { fontSize: 12, color: "#716767", marginBottom: 4 },
  name: { fontSize: 18, fontWeight: "700", color: "#292323", marginBottom: 6 },
  price: { fontSize: 14, fontWeight: "600", color: "#6D0808" },
});
