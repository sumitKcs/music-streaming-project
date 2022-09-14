import {
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { memo } from "react";
import { useGlobalContext } from "../Context/MainContext";

const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  const { featuredData, albumData } = useGlobalContext();

  if (featuredData.length > 0 && albumData.length > 0) {
    console.log(
      "featured data: ",
      featuredData,
      "\n",
      "album data: ",
      albumData
    );
  }

  return (
    <View style={styles.container}>
      {/* <Text>Trending Albums</Text> */}

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={albumData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Playlist", {
                  item,
                })
              }
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 200, height: 200, margin: 20 }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2a2d36",
    height: height,
    width: width,
  },
});

export default memo(Home);
