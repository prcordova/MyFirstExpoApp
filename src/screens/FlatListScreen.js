import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Container from "../components/Container";

export default function App() {
  const data = [
    {
      id: 1,
      title: "Expo e Expo CLI",
      status: "pending",
    },
    {
      id: 2,
      title: "React Native",
      status: "pending",
    },
    {
      id: 3,
      title: "React Navigation",
      status: "done",
    },
    {
      id: 4,
      title: "React Native Elements",
      status: "done",
    },

    {
      id: 5,
      title: "React Native Vector Icons",
      status: "pending",
    },
    {
      id: 6,
      title: "React Native Paper",
      status: "done",
    },
    {
      id: 7,
      title: "React Native Gesture Handler",
      status: "done",
    },
    {
      id: 8,
      title: "React Native Reanimated",
      status: "done",
    },
    {
      id: 9,
      title: "React Native Safe Area Context",
      status: "done",
    },
    {
      id: 10,
      title: "React Native Screens",
      status: "done",
    },
    {
      id: 11,
      title: "React Native Webview",
      status: "done",
    },
    {
      id: 12,
      title: "React Native Community Masked View",
      status: "done",
    },
    {
      id: 13,
      title: "React Native Community Viewpager",
      status: "done",
    },
    {
      id: 14,
      title: "React Native Community Netinfo",
      status: "done",
    },
    {
      id: 15,
      title: "React Native Community Async Storage",
      status: "done",
    },
    {
      id: 16,
      title: "React Native Community Geolocation",
      status: "done",
    },
    {
      id: 17,
      title: "React Native Community Viewpager",
      status: "done",
    },
    {
      id: 18,
      title: "React Native Community Netinfo",
      status: "done",
    },
    {
      id: 19,
      title: "React Native Community Async Storage",
      status: "done",
    },
    {
      id: 20,
      title: "React Native Community Geolocation",
      status: "done",
    },
    {
      id: 21,
      title: "React Native Community Viewpager",
      status: "done",
    },
    {
      id: 22,
      title: "React Native Community Netinfo",
      status: "done",
    },
    {
      id: 23,
      title: "React Native Community Async Storage",
      status: "done",
    },
    {
      id: 24,
      title: "React Native Community Geolocation",
      status: "done",
    },
    {
      id: 25,
      title: "React Native Community Viewpager",
      status: "done",
    },
    {
      id: 26,
      title: "React Native Community Netinfo",
      status: "done",
    },
  ];
  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.headerText}>FlatList</Text>
      </View>

      <View style={styles.cardContainer}>
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={[styles.card]}>
              <View style={styles.row}>
                <View style={styles.idContainer}>
                  <Text style={styles.idText}>{item.id}</Text>
                </View>
                <View style={styles.titleInfo}>
                  <Text>{item.title}</Text>
                </View>
                <View
                  style={[
                    styles.statusSide,
                    item.status !== "pending" ? styles.bgGreen : styles.bgRed,
                  ]}
                >
                  <Text>{item.status}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    top: 10,
    height: 120,
    display: "flex",

    width: "100%",

    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fb5b5a",
  },
  card: {
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },

  cardContainer: {
    flex: 1,
    minWidth: "100%",

    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  bgRed: {
    backgroundColor: "#fb5b5a",
  },
  bgGreen: {
    backgroundColor: "lightgreen",
  },
  idContainer: {
    display: "flex",
    minWidth: "10%",
    flex: 1,
    backgroundColor: "black",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  titleInfo: {
    paddingLeft: 0,
    borderRadius: 10,
    flex: 1,
    minWidth: "65%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  row: {
    minWidth: "100%",
    flex: 1,

    alignItems: "center",
    flexDirection: "row",
  },

  statusSide: {
    right: 0,
    display: "flex",

    minWidth: "25%",
    flex: 1,

    height: 50,

    alignItems: "center",
    justifyContent: "center",
  },

  idText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
