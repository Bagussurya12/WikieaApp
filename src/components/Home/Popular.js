import { View, Text, ScrollView } from "react-native";
import React from "react";
import CardProduct from "../Global/CardProduct";

export default function Popular() {
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 5 }}>Paling Populer</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical: 10,
        }}
      >
        {Array.from(Array(4)).map(() => (
          <CardProduct />
        ))}
      </ScrollView>
    </View>
  );
}
