import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        My name is{" "}
        <Text style={{ fontWeight: "bold" }}>
          Sulemana Abdul-Haafiz Bundana
        </Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 24,
    backgroundColor: "#ADF802",
    alignItems: "center",
    justifyContent: "center",
  },
});
