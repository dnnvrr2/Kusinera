import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenContainer({ children }) {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: "#E0E6F8" },
  scroll: { flexGrow: 1, padding: 24 },
  content: { width: "100%", maxWidth: 600, alignSelf: "center" },
});
