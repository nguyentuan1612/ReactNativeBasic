import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";
const BookItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "http://vietart.co/blog/wp-content/uploads/2014/01/9_thiet_ke_bia_sach_dep_20.jpg",
        }}
        style={{ width: "85%", height: "63%", borderRadius: 5 }}
      />
      <View style={{ width: "80%" }}>
        <Text style={{ fontSize: 15, fontWeight: "bold"}}>The Republic</Text>
        <Text>Ripato</Text>
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
