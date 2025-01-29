import React from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ShortcutGrid from "./components/ShortcutGrid";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="white" style={{ marginRight: 10 }} />
        <TextInput placeholder="Search or enter address" placeholderTextColor="#aaa" style={styles.searchInput} />
      </View>

      {/* Shortcut Grid */}
      <ShortcutGrid />

      {/* Customize Button */}
      <TouchableOpacity style={styles.customizeButton}>
        <Text style={{ color: "white" }}>Customize homepage</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", paddingTop: 30 },
  searchBar: { flexDirection: "row", backgroundColor: "#1e1e1e", padding: 10, margin: 10, borderRadius: 10 },
  searchInput: { color: "white", flex: 1 },
  customizeButton: { backgroundColor: "#333", padding: 15, margin: 20, borderRadius: 10, alignItems: "center" },
  bottomNav: { flexDirection: "row", justifyContent: "space-around", padding: 10, backgroundColor: "#1e1e1e" },
});
