import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ItemMovie from "./MovieIteam";
import ItemLatestMovie from "./LatestMovies";
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function Movie() {
  const dataArray = [
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BNzQxNzQxNjk5NV5BMl5BanBnXkFtZTgwNTI4MTU0MzE@._V1_FMjpg_UX1000_.jpg",
      namMovie: "Finibus Bonorum",
      description:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum",
      rating: 5,
    },
    {
      image: "https://cdn1.clickthecity.com/images/movies/poster/600/12335.jpg",
      namMovie: "Bonorum et Malorum",
      description: "which of us ever undertakes laborious physical exercise",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BZDJlYzMyZTctYzBiMi00Y2E5LTk4YzgtNzU5YzE0MDZkY2EwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_.jpg",
      namMovie: " H. Rackham ",
      description: " Nor again is there anyone who loves or pursues or desires",
      rating: 3,
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BNzQxNzQxNjk5NV5BMl5BanBnXkFtZTgwNTI4MTU0MzE@._V1_FMjpg_UX1000_.jpg",
      namMovie: "praesentium voluptatum",
      description: " dignissimos ducimus qui blanditiis praesentium voluptatum",
      rating: 3,
    },
  ];

  const dataArrayLatest = [
    {
      image:
        "https://api.cinepolisgulf.com/uploads/images/movies/1670224907062-76528722-blob.png",
      namMovie: "At vero eos et accusamus",
      description:
        "iste natus error sit voluptatem accusantium doloremque laudantium",
      rating: 5,
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BODJiMThjMjctZjgxYy00MjRkLTlmNzAtZGIxYjJjODNkOTBiXkEyXkFqcGdeQXVyMTI0MzcyMDk4._V1_.jpg",
      namMovie: " rejects pleasures to secure",
      description: "On the other hand, we denounce with righteous indignation and dislike men ",
      rating: 4.5,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGe-_8QNXnId3Ak2b8-LvpjH1UCUsAO9F4XB9b9JQi5ZE_ku_U9JpKsb1yfNQhzxU46o8&usqp=CAU",
      namMovie: "voluptate velit esse ",
      description: " Nor again is there anyone who loves or pursues or desires",
      rating: 3,
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BNzQxNzQxNjk5NV5BMl5BanBnXkFtZTgwNTI4MTU0MzE@._V1_FMjpg_UX1000_.jpg",
      namMovie: "praesentium voluptatum",
      description: " dignissimos ducimus qui blanditiis praesentium voluptatum",
      rating: 3,
    },
  ];
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://cdn.theatlantic.com/thumbor/e3SrEF40X-MywwdMPR8atugajaM=/2076x0:4506x2430/1080x1080/media/img/mt/2022/09/avatar_rerelease_2/original.jpg",
        }}
        style={{ width: "100%", height: "100%" }}
        blurRadius={7}
      >
        <StatusBar style="auto" />
        <View style={styles.body}>
          <View
            style={{
              marginTop: 13,
              marginBottom: 13,
              flexDirection:"row",
              justifyContent:"space-between",
              alignItems:"baseline"
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Movies
            </Text>
            <MaterialCommunityIcons name="magnify-expand" size={30} color={"white"}/>
          </View>
          <View style={{ height: "40%" }}>
            <FlatList
              horizontal={true}
              data={dataArray}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <ItemMovie
                    name={item.namMovie}
                    description={item.description}
                    rating={item.rating}
                    image={item.image}
                  />
                );
              }}
            />
          </View>

          <View
            style={{
              marginTop: 13,
              marginBottom: 13,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Latest Movie
            </Text>

            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              See all
            </Text>
          </View>
          <View style={{ height: "50%" }}>
            <FlatList
              data={dataArrayLatest}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <ItemLatestMovie
                    name={item.namMovie}
                    description={item.description}
                    rating={item.rating}
                    image={item.image}
                  />
                );
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    width: "100%",
    height: "100%",
    padding: 18,
  },
});
