import { View, Text, Button } from "react-native";
import React from "react";

function DetailsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Detail Screen</Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Back"
        style={{
          padding: 10,
        }}
      />
    </View>
  );
}

export default DetailsScreen;
