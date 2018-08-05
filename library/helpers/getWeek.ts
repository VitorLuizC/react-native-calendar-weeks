import { Week } from '../model/Week';

/**
 * Day in milliseconds.
 */
export const DAY = 24 * 60 * 60 * 1000;

/**
 * Week in milliseconds.
 */
export const WEEK = 7 * DAY;

/**
 * Get Date without hours & minutes.
 * @param date
 */
export function getOnlyDate (date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/**
 * Get week using a Date.
 * @param date
 */
export function getWeek (date: Date): Week {
  const sunday = getOnlyDate(date).getTime();
  const week = [ 0, 1, 2, 3, 4, 5, 6 ];
  return week.map((number) => new Date(sunday + number * DAY)) as Week;
}

/**
 * Get a defined quantity of weeks ahead a date.
 * @param date
 * @param quantity
 */
export function getWeeksAhead (date: Date, quantity: number): Array<Week> {
  const weeks = [ ...Array(quantity) ];
  return weeks.map((_, index) => {
    const time = date.getTime() + (quantity - index) * WEEK;
    return getWeek(new Date(time));
  });
}

/**
 * Get a defined quantity of weeks behind a date.
 * @param date
 * @param quantity
 */
export function getWeeksBehind (date: Date, quantity: number): Array<Week> {
  const weeks = [ ...Array(quantity) ];
  return weeks.map((_, index) => {
    const time = date.getTime() - (quantity - index) * WEEK;
    return getWeek(new Date(time));
  });
}
