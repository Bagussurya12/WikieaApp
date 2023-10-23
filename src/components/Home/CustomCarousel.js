import { View, useWindowDimensions, Image, StyleSheet } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";

const styles = StyleSheet.create({
  imageCarousel: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default function CustomCarousel() {
  const { width } = useWindowDimensions();
  const dataCarousel = [
    {
      id: 1,
      imageUrl: "https://plus.unsplash.com/premium_photo-1672136336540-2dd39fd4d1e2?auto=format&fit=crop&q=80&w=1856&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&q=80&w=1812&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        loop={false}
        width={width - 30}
        height={200}
        autoPlay
        data={dataCarousel}
        scrollAnimationDuration={3000}
        renderItem={({ item }) => (
          <Image
            style={styles.imageCarousel}
            source={{
              uri: item.imageUrl,
            }}
          />
        )}
      />
    </View>
  );
}
