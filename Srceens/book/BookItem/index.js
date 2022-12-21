import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";
const BookItem = (Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: Props.icon,
        }}
        style={{ width: "89%", height: "70%", borderRadius: 5 }}
      />
      <View style={{ width: "89%" }}>
        <Text style={{ fontSize: 15, fontWeight: "bold"}}>{Props.name}</Text>
        <Text style={{color:"silver"}}>Ripato</Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>200</Text>
          <Text
            style={{
              width: 70,
              height: 30,
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
              borderRadius: 5,
              lineHeight: 25,
            }}
          >
            Buy
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BookItem;
