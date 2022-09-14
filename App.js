import AppNavigator from "./app/navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./app/Context/MainContext";
import {} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <AppProvider>
      <StatusBar
        backgroundColor="#2a2d36"
        style="light"
        hidden={false}
        translucent={true}
      />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
