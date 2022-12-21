import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";
const PopularyItem = (Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: Props.image,
        }}
        style={{ width: "90%", height: "78%", borderRadius: 8 }}
      />

      <View style={{ width: "90%" }}>
        <Text style={{ color: "red" , marginTop: 10}}>{Props.caterogy}</Text>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" ,marginTop: 3}}>
          {Props.name}
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
        <Text style={{ color: "white" }}>{Props.price}</Text>
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
