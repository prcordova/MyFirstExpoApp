import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

import React from "react";
import Container from "../components/Container";

export default function ScrollViewScreen() {
  const navigation = useNavigation();
  const navigateToNavigationScreen = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      <Text style={styles.title}>ScrollView</Text>
      <Button title="Home" onPress={navigateToNavigationScreen} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur, libero nec ultricies tincidunt, nunc elit ultricies
          mauris, nec ultricies sapien est nec purus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo
        </Text>
        <Text style={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur, libero nec ultricies tincidunt, nunc elit ultricies
          mauris, nec ultricies sapien est nec purus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo
        </Text>
        <Text style={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur, libero nec ultricies tincidunt, nunc elit ultricies
          mauris, nec ultricies sapien est nec purus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo
        </Text>
        <Text style={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur, libero nec ultricies tincidunt, nunc elit ultricies
          mauris, nec ultricies sapien est nec purus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo
        </Text>
        <Text style={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur, libero nec ultricies tincidunt, nunc elit ultricies
          mauris, nec ultricies sapien est nec purus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo
        </Text>
        <Text style={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur, libero nec ultricies tincidunt, nunc elit ultricies
          mauris, nec ultricies sapien est nec purus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo ultricies,
          ultricies odio nec, ultricies metus. Donec nec justo
        </Text>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f64348",
  },
  item: {
    fontSize: 16,
    marginTop: 16,
  },
});
