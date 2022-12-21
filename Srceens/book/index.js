import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
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
      icon: "http://vietart.co/blog/wp-content/uploads/2014/01/8_thiet_ke_bia_sach_dep_20.jpg",
      name: "people go jogging ",
    },
    {
      icon: "http://vietart.co/blog/wp-content/uploads/2014/01/10_thiet_ke_bia_sach_dep_20.jpg",
      name: "seriously polluted",
    },
    {
      icon: "http://vietart.co/blog/wp-content/uploads/2014/01/1_thiet_ke_bia_sach_dep_20.jpg",
      name: " gather to go to",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmHUiTNchRJ2yxkA6wd3Y5Fv4f10mENwjEg&usqp=CAU",
      name: " I hate tranquility",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJezSGLCzLOrB5DmAN5sQawxzPtFRIOcaAg&usqp=CAU",
      name: " always crowded and",
    },
    {
      icon: "http://vietart.co/blog/wp-content/uploads/2014/01/4_thiet_ke_bia_sach_dep_20.jpg",
      name: "more houses grow",
    },
    {
      icon: "http://vietart.co/blog/wp-content/uploads/2014/01/6_thiet_ke_bia_sach_dep_20.jpg",
      name: " tranquil place to ",
    },
    {
      icon: "http://vietart.co/blog/wp-content/uploads/2014/01/7_thiet_ke_bia_sach_dep_20.jpg",
      name: "One feature of the",
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
          <View style={styles.header}>
            <Text style={styles.textHeader}>Expor Market</Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3602/3602145.png",
                }}
                style={{ width: 25, height: 25, tintColor: "white" , marginHorizontal:8 }}
              />
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/2811/2811806.png",
                }}
                style={{ width: 28, height: 28, tintColor: "white", marginHorizontal:8 }}
              />
            </View>
          </View>
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
            numColumns={2}
            data={BookData}
            renderItem={({ item }) => {
              return <BookItem icon={item.icon} name={item.name} />;
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
    backgroundColor: "#FBF9F2",
  },

  body: {
    padding: 12,
    marginBottom: 105,
  },

  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textHeader: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
