import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenContainer from "../components/ScreenContainer";
import AuthButton from "../components/authButton";

export default function DetailsScreen({ item, id, onBack }) {
  if (!item) {
    return (
      <ScreenContainer>
        <Text style={styles.title}>Item not found</Text>
        <Text style={styles.description}>There is no menu item with ID: {id || "(missing)"}.</Text>
        <AuthButton title="Back to menu" onPress={onBack} />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <Text style={styles.eyebrow}>KUSINERA / MENU DETAILS</Text>
      <View style={styles.hero}>
        <Ionicons name={item.icon} size={60} color="#6D0808" />
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>PHP {item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.id}>ID: {id}</Text>
        <Text style={styles.heading}>About this dish</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.facts}>
          <Text style={styles.fact}>Serves: {item.serving}</Text>
          <Text style={styles.fact}>Preparation: {item.preparationTime}</Text>
        </View>
        <Text style={styles.heading}>Ingredients</Text>
        {item.ingredients.map((ingredient) => (
          <Text style={styles.ingredient} key={ingredient}>{"\u2022"} {ingredient}</Text>
        ))}
      </View>
      <AuthButton title="Back to menu" onPress={onBack} />
      <Text style={styles.note}>Sample menu for our class project.</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { color: "#6D0808", fontSize: 12, fontWeight: "700", letterSpacing: 1, marginVertical: 12 },
  hero: { alignItems: "center", backgroundColor: "#F8ECE8", borderRadius: 24, padding: 28, marginTop: 8, marginBottom: 20 },
  category: { color: "#716767", fontSize: 14, marginTop: 16, marginBottom: 8 },
  title: { color: "#292323", fontSize: 30, fontWeight: "800", textAlign: "center" },
  price: { color: "#6D0808", fontSize: 22, fontWeight: "700", marginTop: 12 },
  card: { backgroundColor: "#FFFFFF", borderRadius: 20, padding: 24, marginBottom: 10 },
  id: { color: "#6D0808", fontSize: 13, fontWeight: "700", marginBottom: 18 },
  heading: { color: "#292323", fontSize: 18, fontWeight: "700", marginBottom: 10 },
  description: { color: "#625B5B", fontSize: 16, lineHeight: 25, marginVertical: 8 },
  facts: { borderTopWidth: 1, borderTopColor: "#EEE8E8", marginTop: 14, paddingVertical: 18, gap: 8 },
  fact: { color: "#625B5B", fontSize: 14 },
  ingredient: { color: "#625B5B", fontSize: 15, lineHeight: 25 },
  note: { color: "#716767", textAlign: "center", fontSize: 12, marginTop: 20 },
});
