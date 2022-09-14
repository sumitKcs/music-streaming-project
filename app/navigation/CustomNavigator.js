import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import SongList from "../screens/Playlist";
import { Color } from "../Misc/Color";

const Stack = createNativeStackNavigator();

const CustomNavigator = () => {
  const d = new Date();
  const hour = d.getHours();
  let greeting;
  if (hour >= 3 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 16) {
    greeting = "Good Afternoon";
  } else greeting = "Good Evening";

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={greeting}
        component={Home}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Color.APP_COLOR,
          },
          headerTitleStyle: {
            color: Color.FONT_NORMAL,
          },
        }}
      />
      <Stack.Screen
        name="Playlist"
        component={SongList}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: Color.APP_COLOR,
          },
          headerTitleStyle: {
            color: Color.APP_COLOR,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CustomNavigator;
