/*jshint esversion: 6 */
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./components/HomeScreen";
import AnotherScreen from "./components/AnotherScreen";

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Another: AnotherScreen,
  });

const AppContainer = createAppContainer(AppNavigator);

export default class myApp extends React.Component {
   render() {
       return <AppContainer />;
    }
  }