import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import FlatListScreen from "../screens/FlatListScreen";
import NavigationScreen from "../screens/NavigationScreen";
import ScrollViewScreen from "../screens/ScrollViewScreen";
import UsingApiScreen from "../screens/UsingApiScreen";

console.log(
  HomeScreen,
  FlatListScreen,
  NavigationScreen,
  ScrollViewScreen,
  UsingApiScreen
);

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "FlatList") {
            iconName = "list";
          } else if (route.name === "Navigation") {
            iconName = "navigate";
          } else if (route.name === "ScrollView") {
            iconName = "document-text";
          } else if (route.name === "api") {
            iconName = "cloud";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ff0044",
        tabBarInactiveTintColor: "#bbb",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="api" component={UsingApiScreen} />
      <Tab.Screen name="FlatList" component={FlatListScreen} />
      <Tab.Screen name="Navigation" component={NavigationScreen} />
      <Tab.Screen name="ScrollView" component={ScrollViewScreen} />
    </Tab.Navigator>
  );
}
