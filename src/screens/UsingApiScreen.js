import React from "react";
import { StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import Container from "../components/Container";

export default function UsingApiScreen() {
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Text style={styles.title}>Navigation Screen</Text>
      <Button title="Back" onPress={navigateBack} />
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
