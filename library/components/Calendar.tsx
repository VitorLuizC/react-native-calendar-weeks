import React, { Component } from 'react';
import { View } from 'react-native';
import { WeekDaysNames } from '../model/WeekDaysNames';
import { Week } from '../model/Week';
import { getWeeksAhead, getWeek, getWeeksBehind } from '../helpers/getWeek';
import { CalendarWeek } from './CalendarWeek';

/**
 * `Calendar` props.
 */
export type CalendarProps = {
  from: Date;
  weeksAhead?: number;
  weeksBehind?: number;
  weekDaysNames?: WeekDaysNames;
  onDatePress?: (date: Date) => void;
};

/**
 * `Calendar` renders a calendar with only weeks.
 */
export class Calendar extends Component<CalendarProps> {
  static defaultProps: CalendarProps = {
    from: new Date(),
    weeksAhead: 0,
    weeksBehind: 0,
    weekDaysNames: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ]
  };

  get weeks (): Array<Week> {
    return [
      ...getWeeksBehind(this.props.from, this.props.weeksBehind),
      getWeek(this.props.from),
      ...getWeeksAhead(this.props.from, this.props.weeksAhead),
    ];
  }

  render () {
    return (
      <View>
        {
          this.weeks.map((week, index) => (
            <CalendarWeek
              key={ index }
              week={ week }
              onDatePress={ this.props.onDatePress }
            />
          ))
        }
      </View>
    );
  }
}
