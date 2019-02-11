/*jshint esversion: 6 */
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./components/HomeScreen";

const AppNavigator = createStackNavigator({
    Home: HomeScreen
  });

const AppContainer = createAppContainer(AppNavigator);

export default class myApp extends React.Component {
   render() {
       return <AppContainer />;
    }
  }