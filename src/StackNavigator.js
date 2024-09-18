import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import NavigationScreen from "./screens/NavigationScreen";
import ScrollViewScreen from "./screens/ScrollViewScreen";
import FlatListScreen from "./screens/FlatListScreen";
import UsingApiScreen from "./screens/UsingApiScreen";

import TabNavigator from "./TabNavigation";
import AcelerometerScreen from "./screens/AcelerometerScreen";

// Create a Stack Navigator
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="tabs" component={TabNavigator} />
        <Stack.Screen name="Acelerometer" component={AcelerometerScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScrollViewScreen" component={ScrollViewScreen} />
        <Stack.Screen name="FlatListScreen" component={FlatListScreen} />
        <Stack.Screen name="Navigation" component={NavigationScreen} />
        <Stack.Screen name="api" component={UsingApiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
