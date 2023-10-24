import { View, StyleSheet, useWindowDimensions, Linking, Platform } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import Carousel from "react-native-reanimated-carousel";
import { Card, Text, IconButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";

export default function DiscoverScreen() {
  const markers = [
    {
      cordinate: { latitude: 37.8025259, longitude: -122.4351431 },
      title: "Wikea Drop Store",
      address: "1234 Main St, San Frasisco, CA 94122",
      image: "https://plus.unsplash.com/premium_photo-1672136336540-2dd39fd4d1e2?auto=format&fit=crop&q=80&w=1856&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      cordinate: { latitude: 37.7896386, longitude: -122.421646 },
      title: "Wikea Drop Store 2",
      address: "1234 Main St, San Frasisco, CA 94122",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      cordinate: { latitude: 37.7665248, longitude: -122.4161628 },
      title: "Wikea Drop Store 2",
      address: "1234 Main St, San Frasisco, CA 94122",
      image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&q=80&w=1812&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const { width } = useWindowDimensions();
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={{ alignItems: "center" }}>
        <Carousel
          loop={false}
          width={width - 30}
          height={250}
          autoPlay
          data={markers}
          style={{ top: 20 }}
          scrollAnimationDuration={3000}
          renderItem={({ item }) => (
            <Card style={{ overflow: "hidden" }}>
              <Card.Cover source={{ uri: item.image }} style={{ height: 150, borderRadius: 0 }} />
              <Card.Content style={{ padding: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ fontSize: 18, fontWeight: "500" }}>{item.title}</Text>
                  <Text>{item.address}</Text>
                </View>
                <IconButton
                  mode="outlined"
                  onPress={() =>
                    Linking.openURL(
                      Platform.OS === "android"
                        ? `google.navigation:q=${item.cordinate.latitude},${item.cordinate.longitude}`
                        : `maps://app?daddr=${item.cordinate.latitude}, ${item.cordinate.longitude}`
                    )
                  }
                  icon={() => <Ionicons size={24} name="locate" />}
                ></IconButton>
              </Card.Content>
            </Card>
          )}
        />
      </View>

      <View style={{ position: "absolute", top: 100, left: 50 }} />
    </View>
  );
}
