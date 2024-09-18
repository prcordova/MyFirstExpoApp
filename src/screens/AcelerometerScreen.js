import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import Button from "../components/Button";

export default function AcelerometerScreen() {
  const navigation = useNavigation();
  const navigateToNavigationScreen = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      <Text style={styles.title}>Acelerometer</Text>
      <Button title="Home" onPress={navigateToNavigationScreen} />
    </Container>
  );
}
