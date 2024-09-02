import React from "react";
import { StyleSheet, View } from "react-native";

export default function Container({ children, bgColor, ...props }) {
  return (
    <View
      style={[styles.container, { backgroundColor: bgColor || "white" }]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
