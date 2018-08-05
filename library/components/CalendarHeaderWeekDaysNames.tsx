import React, { SFC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WeekDaysNames } from '../model/WeekDaysNames';

/**
 * `CalendarHeaderWeekDaysNames` props.
 */
export type CalendarHeaderWeekDaysNamesProps = {
  weekDaysNames: WeekDaysNames;
};

/**
 * `CalendarHeaderWeekDaysNames` render week days names..
 * @param props
 */
export const CalendarHeaderWeekDaysNames: SFC<CalendarHeaderWeekDaysNamesProps> = ({
  weekDaysNames
}) => (
  <View style={ styles.weekDaysNames }>
    {
      weekDaysNames.map((weekDayName, index) => (
        <View key={ index } style={ styles.weekDayName }>
          <Text>{ weekDayName }</Text>
        </View>
      ))
    }
  </View>
);

const styles = StyleSheet.create({
  weekDayName: {
    width: 25,
    height: 25
  },

  weekDaysNames: {
    flexDirection: 'row'
  }
});
