import React, { SFC } from 'react';
import { TouchableOpacity, Text } from 'react-native';

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
  <TouchableOpacity onPress={ onPress && (() => onPress(date)) }>
    <Text>{ date.getDate() }</Text>
  </TouchableOpacity>
);
