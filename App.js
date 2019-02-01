import React, { Component } from 'react';
import { 
  AppRegistry,
  Button,
  StyleSheet, 
  Text, 
  Image,
  View, 
  FlatList,
  TouchableOpacity,
  TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    message: 'I am da one, di ultimate',
    countries: [
      { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
      { name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
      { name: "Bulgaria", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
      { name: "Canada", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
      { name: "Switzerland", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
      { name: "China", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
      { name: "Czech Republic", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
      { name: "Germany", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
      { name: "Spain", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
      { name: "Ethiopia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png" },
      { name: "Croatia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
      { name: "Hungary", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png" },
      { name: "Italy", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png" },
      { name: "Jamaica", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png" },
      { name: "Romania", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png" },
      { name: "Russia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png" },
      { name: "United States", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
    ],
  }

  handleButton = () => {
    this.setState({
      message: 'Button was clicked'
    });
  }

  handleListTap = item => {
    console.log(item.name)
  }
  render() {
    return (
      <View style={styles.one_guh}>
        <Text>Yo mi wah guh a mi yard </Text>
        <Text> {this.state.message}</Text>
        <TextInput style={{height: 40, width: 200, borderWidth: 1, borderColor: 'lightgray'}}
          //we had to establish borderWidth for it to be visible
          value = {this.state.message}
          onChangeText={(text) => this.setState({ message: text })}
          //as user changes the text input we will update the message var accordingly
        />
        <Button onPress={this.handleButton} 
          // Onpress this function will be called & handleButton will reassign some text to message var
          title="MyButton"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <FlatList
          ItemSeparatorComponent={() => 
          <View 
              style={{height:1, width:'100%', backgroundColor: 'lightgray'}}
            />
          }
          data={this.state.countries}
          keyExtractor={item => item.name}
          renderItem={({ item }) => 
            <TouchableOpacity 
              style={{flexDirection: 'row',alignItems: 'center',  padding: 10}}
              onPress={() => this.handleListTap(item)}
              >
              <Image
                  style={{height:50, width: 50, borderRadius:25}}
                  source={{uri:  item.imageSrc}}
              />
              <Text style={{ padding:10 }}> {item.name} </Text>
            </TouchableOpacity>
          }
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

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => App);

