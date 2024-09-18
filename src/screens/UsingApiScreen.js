import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import Container from "../components/Container";
import axios from "axios";
import { Image } from "react-native";

export default function UsingApiScreen() {
  const [user, setUser] = useState([]);

  const fetchGithubUser = async () => {
    try {
      const response = await axios.get("http://api.github.com/users/prcordova");
      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchGithubUser();
  }, []);

  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <View style={styles.container}>
        <Text style={styles.title}>Github Data </Text>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
        <Text style={styles.info}>Username: {user.login}</Text>
        <Text style={styles.info}>Description: {user.bio}</Text>
        <Text style={styles.info}>Location: {user.location}</Text>
        <Text style={styles.info}>Public Repos: {user.public_repos}</Text>
        <Text style={styles.info}>Followers: {user.followers}</Text>
        <Text style={styles.info}>Following: {user.following}</Text>
        <Text style={styles.info}>Created at: {user.created_at}</Text>
        <Text style={styles.info}>Last update: {user.updated_at}</Text>
        <Button title="Back" onPress={navigateBack} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
  actions: {
    flexDirection: "row",
  },
});
