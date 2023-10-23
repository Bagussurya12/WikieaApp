import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import GlobalStyles from "../style/GlobalStyles.js";

export default function CustomSafeArea({ children }) {
  return <SafeAreaView style={GlobalStyles.safeAreaStyles}>{children}</SafeAreaView>;
}
