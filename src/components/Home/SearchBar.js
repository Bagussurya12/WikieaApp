import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";
import { IconButton } from "react-native-paper";

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    flex: 1,
    gap: 10,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    padding: 10,
    gap: 10,
    flex: 1,
  },
  borderShadow: {
    borderRadius: 50,
    shadowColor: "gray",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0.2,
    backgroundColor: "#F5F5F5",
  },
});

export default function SearchBar() {
  return (
    <View style={styles.searchBarContainer}>
      <View style={[styles.searchBar, styles.borderShadow]}>
        <Ionicons name="search" size={12} />
        <TextInput placeholder="Mau Cari Apa? Semua Ada!" />
      </View>
      <IconButton icon="menu" />
    </View>
  );
}
