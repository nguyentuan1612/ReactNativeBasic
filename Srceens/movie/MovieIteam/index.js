import { View, Text, Image } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import React from "react";
import styles from "./style";
const ItemMovie = (Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: Props.image }}
        style={{ width: "95%", height: "70%" , borderRadius: 10}}
      />

      <Text style={{ color: "white", fontWeight: "bold", marginVertical: 5 }}>
        {Props.name}
      </Text>
      <Text style={{ color: "white", fontSize: 10 }}>{Props.description}</Text>
      <AirbnbRating
        ratingContainerStyle={{ height: 10, alignItems: "flex-start" }}
        count={5}
        defaultRating={Props.rating}
        size={13}
      />
    </View>
  );
};

export default ItemMovie;
