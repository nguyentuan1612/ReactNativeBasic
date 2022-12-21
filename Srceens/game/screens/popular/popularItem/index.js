import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";
const PopularyItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/vi/9/9f/Cyberpunk_2077_box_art.jpg",
        }}
        style={{ width: "90%", height: "78%", borderRadius: 8 }}
      />

      <View style={{ width: "90%" }}>
        <Text style={{ color: "red" , marginTop: 10}}>Action</Text>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" ,marginTop: 3}}>
          Cyberpunk 2077
        </Text>
      </View>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          marginTop: 3,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white" }}>$22,3</Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            borderWidth: 1,
            width: 90,
            height: 20,
            borderColor: "#00FF00",
            color:"#00FF00",
            textAlign:"center",
            lineHeight:20
          }}
        >
          PRE BOOKING
        </Text>
      </View>
    </View>
  );
};

export default PopularyItem;
