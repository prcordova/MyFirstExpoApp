import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import Container from "../components/Container";

export default function NavigationScreen() {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <Text style={styles.title}>Navigation Screen</Text>
      <Button title="Go Back" onPress={() => navigateBack()} />
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
