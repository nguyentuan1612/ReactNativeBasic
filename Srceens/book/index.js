import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Book() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri:"https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-149521/book-open-on-dried-leaves-top-view-photography.jpg"}}
        style={{width: "100%", height: "100%"}}
        blurRadius={5}
     >


      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
