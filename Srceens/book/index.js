import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CaterogyItem from "./CaterogyItem";
import BookItem from "./BookItem";

export default function Book() {
  const CaterogyData = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/599/599502.png",
      name: "Trending",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2508/2508220.png",
      name: "Romance",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2880/2880690.png",
      name: "Children",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2642/2642257.png",
      name: "detective",
    },
  ];

  const BookData = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/599/599502.png",
      name: "Trending",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmHUiTNchRJ2yxkA6wd3Y5Fv4f10mENwjEg&usqp=CAU",
      name: "Romance",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJezSGLCzLOrB5DmAN5sQawxzPtFRIOcaAg&usqp=CAU",
      name: "Children",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2642/2642257.png",
      name: "detective",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2880/2880690.png",
      name: "Children",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2642/2642257.png",
      name: "detective",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2880/2880690.png",
      name: "Children",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2642/2642257.png",
      name: "detective",
    },
  ];
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images3.alphacoders.com/111/1114536.jpg",
        }}
        style={{ width: "100%", height: "100%" }}
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

          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns = {2}
            data={BookData}
            renderItem={({ item }) => {
              return <BookItem />;
              
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
    backgroundColor:"#FBF9F2"
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
