import { View, Text, FlatList, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
const adsAsset = require("../../../assets/promotion.jpeg");

const styles = StyleSheet.create({
  pressableComponent: {
    flex: 1,
    height: 100,
    margin: 5,
  },
  imagePressable: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: "grey",
  },
});

export default function AdsPromotion() {
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 5 }}>Promo Minggu Ini</Text>
      <FlatList
        style={{ marginTop: 5 }}
        numColumns={2}
        data={Array(4)}
        renderItem={() => (
          <Pressable style={styles.pressableComponent}>
            <Image style={styles.imagePressable} source={adsAsset} />
          </Pressable>
        )}
      ></FlatList>
    </View>
  );
}
