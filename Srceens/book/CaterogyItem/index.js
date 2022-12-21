import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";

const Caterrogy = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/599/599502.png"}} style= {{width: 20, height:20,}} />
      <Text style={{marginLeft: 10}}>Trending</Text>
    </View>
  );
};

export default Caterrogy;
