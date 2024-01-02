import { useDeviceOrientation } from "@react-native-community/hooks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Determinanticon from "./assets/Determinanticon";
import MatrixIcon from "./assets/MatrixIcon";
import Matrics4x from "./components/Matrics4x";
import Matrics9x from "./components/Matrics9x";
import { StatusBar } from "react-native";

export default function App() {
  const orientation = useDeviceOrientation();

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle={"default"} />
      <Tab.Navigator safeAreaInsets={{ top: 80 }} detachInactiveScreens={true}>
        <Tab.Screen
          name="Matrics4x"
          children={() => <Matrics4x />}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => <MatrixIcon focused={focused} />,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              backgroundColor: "rgb(230, 247, 255)",
              height: orientation.landscape ? 50 : 70,
            },
            tabBarLabelStyle: {
              fontSize: 18,
              fontStyle: "italic",
              fontWeight: "800",
              color: "black",
              paddingBottom: 8,
            },
            tabBarActiveBackgroundColor: "rgb(179, 255, 179)",
          }}
        />
        <Tab.Screen
          name="Matrics9x"
          children={() => <Matrics9x />}
          options={{
            tabBarIcon: ({ focused }) => <Determinanticon focused={focused} />,
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              backgroundColor: "rgb(230, 247, 255)",
              height: orientation.landscape ? 50 : 70,
            },
            tabBarLabelStyle: {
              fontSize: 18,
              fontStyle: "italic",
              fontWeight: "800",
              color: "black",
              paddingBottom: 8,
            },
            tabBarActiveBackgroundColor: "yellowblue",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
