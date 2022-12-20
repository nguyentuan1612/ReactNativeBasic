import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import ItemMovie from "./ItemMovie";
export default function Movie() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../image/movie-02.jpg")}
        style={{ width: "100%", height: "100%" }}
        blurRadius={5}
      >
        <StatusBar style="auto" />
        <ItemMovie />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
