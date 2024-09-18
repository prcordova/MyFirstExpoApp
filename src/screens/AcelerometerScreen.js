import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import Button from "../components/Button";
import StyledText from "../components/StyledText";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";

export default function AcelerometerScreen() {
  const navigation = useNavigation();
  const navigateBack = () => navigation.navigate("Home");
  const [accelerometerData, setAccelerometerData] = useState({
    x: 0,
    z: 0,
    y: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(Accelerometer.addListener(setAccelerometerData));
  };
  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  });

  return (
    <Container>
      <StyledText>Acelerometer Screen</StyledText>
      <Button title="Home" onPress={navigateBack} />
      <View style={styles.container}>
        <Text style={styles.text}>Acelerômetro </Text>
        <Text style={styles.text}>(em g's sendo 1g= 9.81m/s²)</Text>
        <Text style={styles.text}>X: {accelerometerData.x}</Text>
        <Text style={styles.text}>Y: {accelerometerData.y}</Text>
        <Text style={styles.text}>Z: {accelerometerData.z}</Text>
      </View>
      <Button
        title="Subscribe"
        onPress={subscription ? _unsubscribe : _subscribe}
      >
        {subscription ? "Ativado" : "Desativado"}
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
