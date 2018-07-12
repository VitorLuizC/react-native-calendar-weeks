import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type AppProps = { };

class App extends Component<AppProps> {
  render () {
    return (
      <View style={ styles.container }>
        <Text>Hello World!</Text>
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
