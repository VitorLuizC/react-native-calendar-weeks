import React, { SFC } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * `CalendarWeekDate` props.
 */
export type CalendarWeekDateProps = {
  date: Date;
  onPress: (date: Date) => void;
};

/**
 * `CalendarWeekDate` render a date number.
 * @param props
 */
export const CalendarWeekDate: SFC<CalendarWeekDateProps> = ({
  date,
  onPress
}) => (
  <TouchableOpacity
    style={ styles.container }
    onPress={ onPress && (() => onPress(date)) }
  >
    <Text>{ date.getDate() }</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 25
  }
});
