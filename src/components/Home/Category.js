import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";

const styles = StyleSheet.create({
  iconButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
    width: 100,
    height: 50,
  },
});
export default function Category() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from(Array(5)).map(() => (
          <IconButton
            icon={({ color, size }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="car-outline" size={size} color={color} />
                <Text style={{ fontSize: 10 }}>Sofa</Text>
              </View>
            )}
            style={styles.iconButton}
          />
        ))}
      </ScrollView>
    </View>
  );
}
