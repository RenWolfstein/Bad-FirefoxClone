import React from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";

const shortcuts = [
  { name: "Google", icon: require("../assets/google.png") },
  { name: "YouTube", icon: require("../assets/youtube.png") },
  { name: "Facebook", icon: require("../assets/facebook.png") },
  { name: "Shopee", icon: require("../assets/shopee.png") },
  { name: "ChatGPT", icon: require("../assets/chatgpt.png") },
];

export default function ShortcutGrid() {
  return (
    <FlatList
      data={shortcuts}
      numColumns={4}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View style={styles.shortcutItem}>
          <Image source={item.icon} style={styles.icon} />
          <Text style={styles.label}>{item.name}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  shortcutItem: { alignItems: "center", margin: 15 },
  icon: { width: 50, height: 50, borderRadius: 10 },
  label: { color: "white", fontSize: 12, marginTop: 5 },
});
