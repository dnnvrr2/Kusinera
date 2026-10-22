import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MenuCard({ item, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`View ${item.name}`}
      onPress={() => onPress(item.id)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Image
        source={item.image}
        style={styles.image}
        resizeMode="cover"
        accessibilityLabel={item.name}
      />
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
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: "#F8ECE8",
  },
  info: {
    flex: 1,
  },
  category: {
    fontSize: 12,
    color: "#716767",
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#292323",
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6D0808",
  },
});
