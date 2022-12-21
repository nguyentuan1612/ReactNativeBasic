import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";

const Tab = createMaterialTopTabNavigator();
import Popular from "./screens/popular";
import New from "./screens/new";
import Trending from "./screens/trending";

export default function Game() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <View
          style={{
            width: "100%",
            marginVertical: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 16
          }}
        >
          <View>
            <Text style={{ color: "white" }}>Welcom Back</Text>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Nguyen Tuan
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3602/3602145.png",
              }}
              style={{ width: 30, height: 30, tintColor: "white" }}
            />

            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/219/219970.png",
              }}
              style={{
                width: 30,
                height: 30,
                tintColor: "white",
                marginHorizontal: 13,
              }}
            />
          </View>
        </View>
        <Tab.Navigator
          initialRouteName="Popular"
          screenOptions={{
            tabBarStyle: { backgroundColor: "black" },
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "white",
            tabBarScrollEnabled: true,
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
    padding: 9,
  },
});
