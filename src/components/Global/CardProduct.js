import { Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

const styles = StyleSheet.create({
  cardContainer: {
    width: 170,
    overflow: "hidden",
    marginRight: 17,
    marginBottom: 10,
  },
  cardCover: {
    borderRadius: 0,
    height: 150,
  },
  cardTextLabel: {
    fontWeight: "500",
    fontSize: 16,
  },
});
const furnitureJpg = require("../../../assets/furniture.jpg");

export default function CardProduct() {
  return (
    <Card style={styles.cardContainer}>
      <Card.Cover source={furnitureJpg} style={styles.cardCover} />
      <Card.Content style={{ padding: 10 }}>
        <Text style={styles.cardTextLabel}>Sofa</Text>
        <Text>Rp.2.300.000.,</Text>
      </Card.Content>
    </Card>
  );
}
