import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import MenuCard from "../components/MenuCard";
import menuItems from "../data/menuItems";

export default function HomeScreen({ username, onSelectItem, onLogin, onLogout }) {
  return (
    <ScreenContainer>
      <View style={styles.header}>
        <View>
          <Text style={styles.brand}>KUSINERA</Text>
          <Text style={styles.tagline}>Filipino comfort food</Text>
        </View>
        <Pressable accessibilityRole="button" onPress={username ? onLogout : onLogin} style={styles.account}>
          <Text style={styles.accountText}>{username ? "Log out" : "Log in"}</Text>
        </Pressable>
      </View>
      <Text style={styles.greeting}>{username ? `Welcome, ${username}!` : "Welcome to our table"}</Text>
      <Text style={styles.title}>Something delicious{"\n"}is waiting.</Text>
      <Text style={styles.subtitle}>Five favorites from our kitchen. Tap a dish to see what makes it special.</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our menu</Text>
        <Text style={styles.count}>{menuItems.length} dishes</Text>
      </View>
      {menuItems.map((item) => (
        <MenuCard key={item.id} item={item} onPress={onSelectItem} />
      ))}
      <Text style={styles.note}>Made for good food and good company.</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12, marginVertical: 12 },
  brand: { color: "#6D0808", fontSize: 27, fontWeight: "800", letterSpacing: 1 },
  tagline: { color: "#716767", fontSize: 13, marginTop: 4 },
  account: { paddingVertical: 10, paddingHorizontal: 16, borderWidth: 1, borderColor: "#6D0808", borderRadius: 20 },
  accountText: { color: "#6D0808", fontWeight: "600", fontSize: 13 },
  greeting: { color: "#6D0808", fontSize: 14, fontWeight: "600", marginTop: 28, marginBottom: 10 },
  title: { color: "#292323", fontSize: 34, lineHeight: 40, fontWeight: "800" },
  subtitle: { color: "#625B5B", fontSize: 15, lineHeight: 23, marginTop: 14, marginBottom: 28 },
  section: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 14 },
  sectionTitle: { color: "#292323", fontSize: 21, fontWeight: "700" },
  count: { color: "#716767", fontSize: 13 },
  note: { color: "#716767", textAlign: "center", fontSize: 12, marginTop: 18, marginBottom: 8 },
});
