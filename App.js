import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import CustomSafeArea from "./src/components/CustomSafeArea.js";
import Routes from "./src/routes/index.js";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <CustomSafeArea>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </CustomSafeArea>
  );
}
