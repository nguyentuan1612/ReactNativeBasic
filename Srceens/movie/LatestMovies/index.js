import { View, Text, Image } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import React from "react";
import styles from "./styles";
const ItemLatestMovie = (Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: Props.image }}
        style={{ width: "30%", height: "100%" }}
      />

      <View style={{ height: "100%", width: "67%" }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          {Props.name}
        </Text>
        <Text style={{ color: "white", fontSize: 14, marginVertical: 15 }}>
          {Props.description}
        </Text>
        <AirbnbRating
          ratingContainerStyle={{ height: 10, alignItems: "flex-start" }}
          count={5}
          defaultRating={Props.rating}
          size={13}
        />
      </View>
    </View>
  );
};

export default ItemLatestMovie;
