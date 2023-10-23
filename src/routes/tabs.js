import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../view/screens/home/HomeScreen.js";
import FavoriteScreen from "../view/screens/home/FavoriteScreen.js";
import DiscoverScreen from "../view/screens/home/DiscoverScreen.js";
import { Ionicons } from "react-native-vector-icons";

const Tabs = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { position: "absolute", bottom: 25, left: 20, right: 20, borderRadius: 15, height: 50 } }}>
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />,
        }}
        name="Home"
        component={HomeScreen}
      ></Tabs.Screen>
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? "map" : "map-outline"} size={size} color={color} />,
        }}
        name="Discover"
        component={DiscoverScreen}
      ></Tabs.Screen>
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? "heart" : "heart-outline"} size={size} color={color} />,
        }}
        name="Favorite"
        component={FavoriteScreen}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
}
