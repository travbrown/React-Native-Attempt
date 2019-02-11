/*jshint esversion: 6 */
import React, { Component } from 'react';
import { 
  Button,
  StyleSheet,
  Text, 
  Image,
  View,
  FlatList,
  TouchableOpacity,
  TextInput } from 'react-native';

export default class AnotherScreen extends React.Component {
  state = {
      message: 'I am da one, di ultimate',
  }
 
  handleListTap = item => {
    console.log(item.name)
  }

  render() {
    return (
        <View style={styles.one_guh}>
            <Text>
                {this.props.navigation.getParam('name', 'no title')}
            </Text>
            <Button 
                title="Go Back"
                onPress={() => this.props.navigation.goBack()}
            />
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  one_guh: {
    //alignItems: 'center',
    paddingTop: 50,
    //justifyContent: 'center',
    flex: 1,
  }
})


