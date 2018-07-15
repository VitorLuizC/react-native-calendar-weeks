import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from './build';

type AppProps = { };

class App extends Component<AppProps> {
  private onButtonPress = () => Alert.alert('The button was pressed.');

  render () {
    return (
      <View style={ styles.container }>
        <Text>Hello World!</Text>
        <Button onPress={ this.onButtonPress }>Opa!</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
