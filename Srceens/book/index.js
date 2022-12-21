import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import CaterogyItem from './CaterogyItem'
export default function Book() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-149521/book-open-on-dried-leaves-top-view-photography.jpg",
        }}
        style={{ width: "100%", height: "100%" }}
        blurRadius={5}
      >
        <View style={styles.body}>
          <Text style={styles.textHeader}>Expor Market</Text>
          <CaterogyItem/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    padding: 12,

  },

  textHeader: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginTop: 20,
  },
});
