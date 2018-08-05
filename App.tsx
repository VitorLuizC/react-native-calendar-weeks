import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar } from './library';

export default () => (
  <View style={ styles.container }>
    <Calendar
      from={ new Date(1996, 3 - 1, 28) }
      onDatePress={ (date) => console.log({ date }) }
      weeksAhead={ 2 }
      weeksBehind={ 2 }
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
