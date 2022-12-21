import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CaterogyItem from "./CaterogyItem";
export default function Book() {
  const CaterogyData = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/599/599502.png",
      name: "Trending",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/599/599502.png",
      name: "Trending",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/599/599502.png",
      name: "Trending",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/599/599502.png",
      name: "Trending",
    },
  ];
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
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={CaterogyData}
            renderItem={({ item }) => {
              return <CaterogyItem name={item.name} icon={item.icon} />;
            }}
          />
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
    flex: 1
  },

  textHeader: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginTop: 20,
  },
});
