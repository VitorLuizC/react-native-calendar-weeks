import React, { SFC } from 'react';
import { View } from 'react-native';
import { Week } from '../model/Week';
import { CalendarWeekDate } from './CalendarWeekDate';

/**
 * `CalendarWeek` props.
 */
export type CalendarWeekProps = {
  week: Week;
  onDatePress: (date: Date) => void;
};

/**
 * `CalendarWeek` render a row with 7 dates.
 * @param props
 */
export const CalendarWeek: SFC<CalendarWeekProps> = ({
  week,
  onDatePress
}) => (
  <View>
    {
      week.map((date) =>
        <CalendarWeekDate
          date={ date }
          onPress={ onDatePress }
        />
      )
    }
  </View>
);
