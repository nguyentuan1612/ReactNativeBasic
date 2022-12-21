import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";

const Caterrogy = (Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri:Props.icon}} style= {{width: 20, height:20,}} />
      <Text style={{marginLeft: 10}}>{Props.name}</Text>
    </View>
  );
};

export default Caterrogy;
