import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Color } from "../Misc/Color";

const { width, height } = Dimensions.get("window");
console.log(width, height);
const SongList = ({ route }) => {
  const {
    albumid,
    title,
    image,
    name,
    primary_artists,
    primary_artists_id,
    release_date,
    year,
    songs,
  } = route.params.item;
  console.log(songs);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      {songs.map((item, index) => {
        let songName = item.song;
        if (songName.length > 34) {
          songName = item.song.substring(0, 34);
          songName = `${songName}...`;
        }
        let singers = item.singers;
        if (singers.length > 34) {
          singers = item.singers.substring(0, 34);
          singers = `${singers}...`;
        }

        return (
          <View
            key={index}
            style={{
              flex: 1,
              flexDirection: "row",
              width: width,
              margin: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                width: width - 60,
              }}
            >
              <Image source={{ uri: item.image }} style={styles.songImage} />
              <View>
                <Text numberOfLines={1} style={styles.song}>
                  {songName}
                </Text>
                <Text numberOfLines={1} style={styles.singer}>
                  {singers}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
              }}
            >
              <Entypo
                name="dots-three-vertical"
                size={18}
                color="black"
                style={{
                  width: 60,
                  color: "white",
                  textAlign: "center",
                }}
              />
            </TouchableOpacity>
          </View>
        );
      })}
      <View style={{ height: 150, width: width }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: Color.APP_COLOR,
    color: "white",
    paddingBottom: 250,
  },
  imageContainer: {
    width: width,
    height: 300,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  song: {
    padding: 10,
    fontSize: 15,
    color: "white",
    width: width - 20,
  },
  title: {
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  songImage: {
    width: 50,
    height: 50,
  },
  singer: {
    marginTop: -10,
    marginLeft: 10,
    color: "#C0C0C0",
  },
});

export default SongList;
