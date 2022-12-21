import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import PopularyItem from "./popularItem";
import Recent from './popularRecent'
const Popular = () => {
  const GameData = [
    { image: "", caterogy: "", name: "", price: "" },
    { image: "", caterogy: "", name: "", price: "" },
    { image: "", caterogy: "", name: "", price: "" },
    { image: "", caterogy: "", name: "", price: "" },
  ];

  const RecentData = [
    { image: "", caterogy: "", name: "", price: "" },
    { image: "", caterogy: "", name: "", price: "" },
    { image: "", caterogy: "", name: "", price: "" },
    { image: "", caterogy: "", name: "", price: "" },
  ];
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <ScrollView style = {{height:"100%"}}>
        <View style={{ height: 470}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={GameData}
            renderItem={({ item }) => {
              return <PopularyItem />;
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
            data={GameData}
            renderItem={({ item }) => {
              return <Recent/>;
            }}
          />
      </ScrollView>
    </View>
  );
};

export default Popular;
