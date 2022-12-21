import {
  View,
  Text,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import PopularyItem from "./popularItem";
import Recent from "./popularRecent";
const Popular = () => {
  const GameData = [
    { image: "https://upload.wikimedia.org/wikipedia/vi/9/9f/Cyberpunk_2077_box_art.jpg", caterogy: "Action", name: "Cyberpunk 2077", price: "$22,3" },
    { image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg", caterogy: "adventure", name: "Marvel's Spider Man", price: "$33,2" },
  ];

  const RecentData = [
    { image: "https://datdungdinh.com/wp-content/uploads/2022/03/Huong-dan-tai-va-cai-pubg-pc-mien-phi-2022.png"},
    { image: "https://hadoantv.com/wp-content/uploads/2021/12/download-halo-infinite-hadoan-tv.jpg"},
  ];
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <ImageBackground style={{width:"100%", height:"100%"}}
      source={{uri: "https://img1.cgtrader.com/items/2471369/59295c2204/large/cyber-city-street-3d-model-ma.jpg"}}
      blurRadius ={7}
      > 
        <ScrollView style={{ height: "100%" }}>
          <View style={{ height: 470 }}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={GameData}
              renderItem={({ item }) => {
                return <PopularyItem image ={item.image} name = {item.name} price = {item.price} caterogy = {item.caterogy} />;
              }}
            />
          </View>
          <Text
            style={{
              color: "white",
              marginLeft: 16,
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Recents
          </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={RecentData}
            renderItem={({ item }) => {
              return <Recent image = {item.image} />;
            }}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Popular;
