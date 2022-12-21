import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";

const Tab = createMaterialTopTabNavigator();
import Popular from "./screens/popular";
import New from "./screens/new";
import Trending from "./screens/trending";

export default function Game() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: "https://img1.cgtrader.com/items/2471369/59295c2204/large/cyber-city-street-3d-model-ma.jpg",
        }}
        blurRadius={7}
      >
        <StatusBar style="auto" />
        <View style={styles.body}>
          <View
            style={{
              width: "100%",
              marginVertical: 16,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 16,
              paddingRight: 5
            }}
          >
            <View style ={{marginTop: 20}}>
              <Text style={{ color: "white" }}>Welcom Back</Text>
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Nguyen Tuan
              </Text>
            </View>

            <View style={{ flexDirection: "row",marginTop: 20}}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3602/3602145.png",
                }}
                style={{ width: 30, height: 30, tintColor: "white" }}
              />

              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/727/727399.png",
                }}
                style={{
                  width: 30,
                  height: 30,
                  marginHorizontal: 13,
                }}
              />
            </View>
          </View>
          <Tab.Navigator
            initialRouteName="Popular"
            screenOptions={{
              tabBarStyle: {
                // lam mo background cua tab top
                backgroundColor: "transparent",
                left: 0,
                right: 0,
                bottom: 0,
                elevation: 0,
              },
              tabBarActiveTintColor: "red",
              tabBarInactiveTintColor: "white",
              tabBarScrollEnabled: true,
              swipeEnabled: false,
              tabBarItemStyle: {
                width: 100,
                borderColor: "white",
                alignItems: "flex-start",
              },
              // thay doi style cua line
              tabBarIndicatorStyle: {
                width: "10%",
                marginLeft: 16,
                backgroundColor: "red",
              },
            }}
          >
            <Tab.Screen name="Popular" component={Popular} />
            <Tab.Screen name="Trending" component={Trending} />
            <Tab.Screen name="New" component={New} />
          </Tab.Navigator>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  body: {
    flex: 1,
  },
});
