import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createMaterialBottomTabNavigator();
import Book from "./Srceens/book";
import Game from "./Srceens/game";
import Movie from "./Srceens/movie";

export default function App() {
  return (
    <NavigationContainer>
      {
        <Tab.Navigator
          initialRouteName="Game"
          activeColor="green"
          inactiveColor="white"
          barStyle={{ backgroundColor: "#000" }}
          shifting = {true}
        >
          <Tab.Screen
            name="Game"
            
            component={Game}
            options={{
              tabBarColor: "black",
              tabBarIcon: ({ color }) => {
                return (
                  <MaterialCommunityIcons
                    size={20}
                    color={color}
                    name="gamepad"
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Book"
            component={Book}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="book" size={20} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Movie"
            component={Movie}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="movie" size={20} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
