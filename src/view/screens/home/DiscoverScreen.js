import { View, StyleSheet } from "react-native";
import React from "react";
import MapView, { Polyline } from "react-native-maps";

export default function DiscoverScreen() {
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
      >
        <Polyline
          coordinates={[
            { latitude: 37.8025259, longitude: -122.4351431 },
            { latitude: 37.7896386, longitude: -122.421646 },
            { latitude: 37.7665248, longitude: -122.4161628 },
            { latitude: 37.7734153, longitude: -122.4577787 },
            { latitude: 37.8025259, longitude: -122.4351431 },
          ]}
          strokeWidth={10}
          fillColor="#00f"
        ></Polyline>
      </MapView>

      <View style={{ position: "absolute", top: 100, left: 50 }} />
    </View>
  );
}
