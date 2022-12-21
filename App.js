import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Book from "./Srceens/book";
import Game from "./Srceens/game";
import Movie from "./Srceens/movie";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {
        <Tab.Navigator
          initialRouteName="Game"
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: "black" },
            tabBarInactiveTintColor:"white",
            tabBarActiveTintColor: "green"
          }}
        >
          <Tab.Screen
            name="Game"
            component={Game}
            options={{
              tabBarLabel: "Game",
              
              tabBarIcon: ({ color }) => {
                return (
                  <MaterialCommunityIcons
                    name="microsoft-xbox"
                    size={23}
                    color={color}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Book"
            component={Book}
            options={{
              tabBarStyle: {
                  backgroundColor:"#F4EFDE",
              },
              tabBarInactiveTintColor: "black",
              tabBarActiveTintColor: "orange",
              tabBarLabel: "Book",
              tabBarIcon: ({ color }) => {
                return (
                  <MaterialCommunityIcons name="book" size={23} color={color} />
                );
              },
            }}
          />

          <Tab.Screen
            name="Movie"
            component={Movie}
            options={{
              tabBarLabel: "Movie",
              tabBarIcon: ({ color }) => {
                return (
                  <MaterialCommunityIcons
                    name="movie"
                    size={23}
                    color={color}
                  />
                );
              },
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
