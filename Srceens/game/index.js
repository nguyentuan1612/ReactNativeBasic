import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();
import Popular from "./screens/popular";
import New from "./screens/new";
import Trending from "./screens/trending";

export default function Game() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={{color:"white"}}>Welcom Back</Text>
          <Text style={{color:"white"}}>Nguyen Tuan</Text>
        </View>
      </View>
      <Tab.Navigator
      screenOptions={
        {
          tabBarStyle: {backgroundColor:"black"},
          tabBarActiveTintColor:"red",
          tabBarInactiveTintColor:"white"
        }
      }
      >
        <Tab.Screen name="Popular" component={Popular} />
        <Tab.Screen name="Trending" component={Trending} />
        <Tab.Screen name="New" component={New} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black"
  },
});
