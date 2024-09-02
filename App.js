import React from "react";
import StackNavigator from "./src/StackNavigator"; // StackNavigator já inclui o NavigationContainer
import { ThemeProvider } from "styled-components/native";
import { enableScreens } from "react-native-screens";
const theme = {
  colors: {
    primary: "##f0fbff",
    red: "#f64348",
    dark: "#1c1a1d",
    light: "#eaeaea",
  },
  fonts: {
    bold: "Roboto-Bold",
    regular: "Roboto-Regular",
    medium: "Roboto-Medium",
    light: "Roboto-Light",
    thin: "Roboto-Thin",
  },
};

enableScreens();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StackNavigator />
    </ThemeProvider>
  );
}
