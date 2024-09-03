import { useNavigation } from "@react-navigation/native";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import StyledTitle from "../components/StyledText";
import React from "react";

export default function UsingApiScreen() {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation().goBack;
  };

  return (
    <Container>
      <StyledTitle>Using API Screen</StyledTitle>
      <Button title="Go Back" onPress={navigateBack} />
    </Container>
  );
}
